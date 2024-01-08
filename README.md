# Map Test Has Been Built Using Next.js, Leaflet and MUI

## The Project Has The Following Features

1.  Zoom In / Zoom Out Functionality
2.  Multiple Map Layers: Google Maps, Google Map Satellite, Open Street Map
3.  Setting button enabling "grouping" and "ping" functionalities
4.  Grouping functionality
5.  Ping functionality
6.  Fullscreen button for toggling fullscreen mode

## Live Demo

```bash
https://map-3bdlbaki.vercel.app
```

## Getting Started

To run this project locally, follow these steps:

1. **Prerequisites:**

   - Node.js installed
   - pnpm or npm installed

2. **Clone the repository:**

   ```bash
   git clone https://github.com/mhd-abdulbaki/map-test.git
   cd map-test
   ```

3. **Install dependencies::**

   ```bash
   pnpm install
   # or
   npm  install

   ```

4. **Run the development server::**

   ```bash
    pnpm dev
   # or
    npm run dev

   ```

## File structure

**Single Responsibility Principle (SRP)**

Inside the module folder we have all APP Features,
Every feature have a **feature** folder for the smart component, **ui** folder for the dumb components and **data-access** folder to handle server and client state.

```
 ├── app                                       **Server Components
 │ ├── (home)
 │ │ ├── loading.tsx
 │ │ ├── page.tsx
 ├── lib
 │ ├── module                                  **App Features
 │ │ ├── map
 │ │ │ ├── ata-access
 │ │ │ │ ├── service                           **Server State
 │ │ │ │ ├── store                             **Client State
 │ │ │ ├── feature                             **Smart Components
 │ │ │ │ ├── map.module.tsx
 │ │ │ │ ├── layer-control.module.tsx
 │ │ │ │ ├── settings.module.tsx
 │ │ │ │ ├── zoom-control.module.tsx
 │ │ │ ├── ui                                  **Dumb Components
 │ │ │ │ ├── control-wrapper.component.tsx
 │ │ │ │ ├── layer-card.component.tsx
 │ │ │ ├── utils
 │ ├── shared                                  **Shared Resource
 │ │ ├── hook                                  **Shared Custom Hooks
 │ │ ├── ui                                    **Shared Dumb Components
 │ │ │ ├── button.component.tsx
 │ │ │ ├── container.component.tsx
 │ │ │ ├── switch.component.tsx
```
