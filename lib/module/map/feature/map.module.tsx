"use client";

import dynamic from "next/dynamic";

// #Third-Party
import { LatLngExpression } from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false, loading: () => <p>Loading...</p> }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false }
);

// ##Icons
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

// ##Style
import "leaflet/dist/leaflet.css";

// #Dev
// ##Module
import { ZoomControlModule } from "./zoom-control.module";
const SettingsModule = dynamic(
  () => import("./settings.module").then((module) => module.SettingsModule),
  { ssr: false }
);
const LayerControlModule = dynamic(
  () =>
    import("./layer-control.module").then(
      (module) => module.LayerControlModule
    ),
  { ssr: false }
);

// ##UI
import { ControlWrapper } from "../ui/control-wrapper.component";

// ##Shared-UI
import {
  CircularButton,
  GeneralContainer,
  useFullscreenHook,
} from "@/lib/shared";

// #Utils
import { MapProviders } from "../utils/constant/map-providers.const";

const center: LatLngExpression = [59.32233161611693, 18.06842597252023];

export const MapModule = () => {
  const { toggleFullscreen, isFullscreen } = useFullscreenHook("map");

  return (
    <GeneralContainer>
      <MapContainer
        id="map"
        zoom={14}
        minZoom={4}
        maxZoom={18}
        center={center}
        zoomControl={false}
      >
        <TileLayer
          url={MapProviders[0].layer.url}
          attribution={MapProviders[0].layer.attribution}
        />

        <ControlWrapper>
          <ZoomControlModule />

          <LayerControlModule />

          <SettingsModule />

          <CircularButton tooltip="Full Screen" onClick={toggleFullscreen}>
            {isFullscreen ? (
              <FullscreenExitIcon sx={{ fontSize: "1.8rem" }} />
            ) : (
              <FullscreenIcon sx={{ fontSize: "1.8rem" }} />
            )}
          </CircularButton>
        </ControlWrapper>
      </MapContainer>
    </GeneralContainer>
  );
};
