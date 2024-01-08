"use client";

import { useEffect, useState } from "react";

// #Third-Party
import L from "leaflet";
import { useMap } from "react-leaflet";

// ##UI
import { FormControlLabel, FormGroup, Menu } from "@mui/material";
// ##Icon
import SettingsIcon from "@mui/icons-material/Settings";

// ##Leaflet-Plugin
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster.freezable/dist/leaflet.markercluster.freezable.js";
import "leaflet-rotatedmarker";

import "@asymmetrik/leaflet-d3/dist/leaflet-d3.js";

import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";

// #Dev
// ##Shared-UI
import { CircularButton, GeneralSwitch } from "@/lib/shared";

//#Utils
//#Constant
import { CarsCoordinates } from "../utils/constant/cars-coordinates.const";

// #Init Marker Cluster Group
const mcg = L.markerClusterGroup({
  chunkedLoading: true,
});

export const SettingsModule = () => {
  // #Init
  const map = useMap();

  // #Component-State
  const [isFreeze, setIsFreeze] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  //#Component-Lifecycle
  useEffect(() => {
    if (map) {
      mcg.clearLayers();
      CarsCoordinates.forEach(({ lat, lng, angle, color }) => {
        L.marker(new L.LatLng(lat, lng), {
          icon: new L.Icon({
            iconUrl: "/car.png",
            iconSize: [38, 38],
            className: `car ${color}`,
          }),
          rotationAngle: angle,
          riseOnHover: true,
        }).addTo(mcg);
        // L.circleMarker(new L.LatLng(lat, lng), { color: "yellow" }).addTo(map);
      });
      map.addLayer(mcg);
    }
  }, [map]);

  // #Handlers
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };

  const disableClusteringHandler = () => {
    if (isFreeze) {
      setIsFreeze(false);
      //@ts-ignore
      mcg.unfreeze();
    } else {
      setIsFreeze(true);
      //@ts-ignore
      mcg.freezeAtZoom("max");
    }
  };

  return (
    <div>
      <CircularButton
        tooltip="Settings"
        id="basic-button"
        aria-haspopup="true"
        onClick={clickHandler}
        aria-controls={open ? "fade-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
      >
        <SettingsIcon sx={{ fontSize: "1.8rem" }} />
      </CircularButton>

      <Menu
        open={open}
        id="basic-menu"
        anchorEl={anchorEl}
        onClose={closeHandler}
        MenuListProps={{
          "aria-labelledby": "",
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ p: "10px" }}
      >
        <FormGroup sx={{ px: "20px" }}>
          <FormControlLabel
            control={<GeneralSwitch defaultChecked />}
            label="Markers Grouping"
            onChange={disableClusteringHandler}
          />
          <FormControlLabel
            control={<GeneralSwitch />}
            label="Markers Ping Angle"
          />
        </FormGroup>
      </Menu>
    </div>
  );
};
