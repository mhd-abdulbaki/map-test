export const MapProviders = [
  {
    name: "Open Street Map",
    image: "/openstreetmap.png",
    layer: {
      url: "https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=JJncPcJLCDFd0vsLpwqS",
      attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
    },
  },

  {
    name: "Google Map",
    image: "/google.png",
    layer: {
      url: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=JJncPcJLCDFd0vsLpwqS",
      attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
    },
  },

  {
    name: "Google Map Satellite",
    image: "/googleSatellite.png",
    layer: {
      url: "https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=JJncPcJLCDFd0vsLpwqS",
      attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
    },
  },
];
