import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from "../../hooks/http.hook";
import { createSelector } from "@reduxjs/toolkit";
const heroesAdapter = createEntityAdapter()

const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle',
});

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes");
    }
);



const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroCreated: (state, action) => {
            heroesAdapter.addOne(state, action.payload);
        },
        heroDeleted: (state, action) => {
            heroesAdapter.removeOne(state, action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, (state) => {
                state.heroesLoadingStatus = 'loading';
            })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                heroesAdapter.setAll(state, action.payload);
                state.heroesLoadingStatus = 'idle';
            })
            .addCase(fetchHeroes.rejected, (state) => {
                state.heroesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const { actions, reducer } = heroesSlice;

const { selectAll } = heroesAdapter.getSelectors(state => state.heroes);

export const filteredHeroesSelector = createSelector(
        selectAll,
        state => state.filters.activeFilter,
        (heroes, filter) => {
            if (filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(item => item.element === filter);
            }
        }
    )

export const {
    heroCreated,
    heroDeleted
} = actions;
export default reducer;
