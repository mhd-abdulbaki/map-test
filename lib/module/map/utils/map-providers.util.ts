import L from "leaflet";

export const mapProviders = [
  {
    name: "Open Street Map",
    image: "/openstreetmap.png",
    layer: L.tileLayer(
      "https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=JJncPcJLCDFd0vsLpwqS",
      {
        attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
      }
    ),
  },

  {
    name: "Google Map",
    image: "/google.png",
    layer: L.tileLayer(
      "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=JJncPcJLCDFd0vsLpwqS",
      {
        attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
      }
    ),
  },

  {
    name: "Google Map Satellite",
    image: "/googleSatellite.png",
    layer: L.tileLayer(
      "https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=JJncPcJLCDFd0vsLpwqS",
      {
        attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
      }
    ),
  },
];
