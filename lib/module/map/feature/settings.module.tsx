"use client";

import { useEffect, useState } from "react";

// #Third-Party
import L from "leaflet";
import { useMap } from "react-leaflet";
// ##UI
import Tooltip from "@mui/material/Tooltip";
import { FormControlLabel, FormGroup, Menu, Switch } from "@mui/material";
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
import { CircularButton } from "@/lib/shared";

// #Init Marker Cluster Group
const mcg = L.markerClusterGroup({
  chunkedLoading: true,
});

const markers = [
  {
    lat: 59.319789,
    lng: 18.074736,
    text: "Hello, I am pop 1",
  },
  {
    lat: 59.318789,
    lng: 18.074736,
    text: "Hello, I am pop 2",
  },

  {
    lat: 59.317789,
    lng: 18.075736,
  },
  {
    lat: 59.319789,
    lng: 18.076736,
    text: "Hello, I am pop 3",
  },
];

const customIcon = new L.Icon({
  iconUrl: "/car.png",
  iconSize: [38, 38],
  className: "car-shadow car-angle",
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
      markers.forEach(({ lat, lng }) => {
        L.marker(new L.LatLng(lat, lng), {
          icon: customIcon,
          rotationAngle: 170,
          riseOnHover: true,
        }).addTo(mcg);
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
      <Tooltip title="Settings">
        <CircularButton
          id="basic-button"
          aria-haspopup="true"
          onClick={clickHandler}
          aria-controls={open ? "fade-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
        >
          <SettingsIcon sx={{ fontSize: "1.8rem" }} />
        </CircularButton>
      </Tooltip>
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
            control={<Switch defaultChecked />}
            label="Markers Grouping"
            onChange={disableClusteringHandler}
          />
          <FormControlLabel control={<Switch />} label="Markers Ping Angle" />
        </FormGroup>
      </Menu>
    </div>
  );
};
