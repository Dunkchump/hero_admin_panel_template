# ⚡ Hero Admin Panel

*Manage superheroes with elemental powers*

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) ![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2.5-764ABC?logo=redux) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)

## Features

🦸‍♂️ **Create & Delete Heroes** - Add heroes with unique abilities  
🔥 **Elemental Filtering** - Sort by Fire, Water, Wind, Earth  
⚡ **Real-time Updates** - Live sync with backend  
🎨 **Smooth Animations** - Beautiful transitions  

## Quick Start

```bash
git clone <repo-url>
cd hero-admin-panel
npm install
npm start
```

Runs on `localhost:3000` with JSON server on `localhost:3001`

## Usage

**Add Hero** → Fill form → Select element → Create  
**Filter** → Click element buttons to filter heroes  
**Delete** → Click ✕ on hero cards  

## Tech Stack

- **Frontend**: React 18 + Redux Toolkit + Bootstrap 5
- **Backend**: JSON Server (mock API)
- **Styling**: Sass + Bootstrap + CSS Transitions
- **State**: Normalized Redux with Entity Adapters

## Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom hooks (HTTP)
├── store/              # Redux store & slices
└── styles/             # Global styles
```

## API

- `GET /heroes` - Fetch heroes
- `POST /heroes` - Create hero  
- `DELETE /heroes/:id` - Delete hero
- `GET /filters` - Get filter options

## Element Colors

🔥 Fire (Red) • 💧 Water (Blue) • 💨 Wind (Green) • 🌍 Earth (Gray)

---

*Built with React + Redux Toolkit*
