"use client";

// #Third-Party
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

// ##UI
import Tooltip from "@mui/material/Tooltip";

// ##Icons
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

// ##Style
import "leaflet/dist/leaflet.css";

// #Dev
// ##Module
import { SettingsModule } from "./settings.module";
import { ZoomControlModule } from "./zoom-control.module";
import { LayerControlModule } from "./layer-control.module";

// ##UI
import { ControlWrapper } from "../ui/control-wrapper.component";

// ##Shared-UI
import { CircularButton, useFullscreenHook } from "@/lib/shared";

const center: LatLngExpression = [59.319789, 18.074736];

const layer = {
  url: "https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=JJncPcJLCDFd0vsLpwqS",
  attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
};

export const MapModule = () => {
  const { toggleFullscreen, isFullscreen } = useFullscreenHook("map");
  return (
    <div className="m-10 border rounded-2xl shadow-xl overflow-hidden">
      <MapContainer
        id="map"
        zoom={17}
        minZoom={4}
        maxZoom={18}
        center={center}
        zoomControl={false}
      >
        <TileLayer url={layer.url} attribution={layer.attribution} />

        <ControlWrapper>
          <ZoomControlModule />

          <LayerControlModule />

          <SettingsModule />

          <Tooltip title="Full Screen">
            <CircularButton onClick={toggleFullscreen}>
              {isFullscreen ? (
                <FullscreenExitIcon sx={{ fontSize: "1.8rem" }} />
              ) : (
                <FullscreenIcon sx={{ fontSize: "1.8rem" }} />
              )}
            </CircularButton>
          </Tooltip>
        </ControlWrapper>
      </MapContainer>
    </div>
  );
};
