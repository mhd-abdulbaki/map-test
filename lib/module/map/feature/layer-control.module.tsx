"use client";

import { useState } from "react";

// #Third-Party
import L from "leaflet";
import { useMapEvents } from "react-leaflet";

// ##UI
import { Box, Menu } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
// ##Icon
import LayersIcon from "@mui/icons-material/Layers";

// #Dev
// ##UI
import { CircularButton } from "@/lib/shared";
import { LayerCard } from "../ui/layer-card.component";

// #Utils
import { mapProviders } from "../utils/map-providers.util";

export const LayerControlModule = () => {
  // #Init
  const mapEvents = useMapEvents({});

  // #Component-State
  const [active, setActive] = useState("Open Street Map");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // #Handlers
  // ##Change Layer Handler
  const onLayerSelectHandler = (layer: L.Layer, name: string) => {
    setActive(name);
    if (mapEvents?.hasLayer(layer)) {
      mapEvents.removeLayer(layer);
      mapEvents.addLayer(layer);
    } else {
      mapEvents.addLayer(layer);
    }
  };

  // ##Menu Handlers
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Change Map">
        <CircularButton
          id="basic-button"
          aria-haspopup="true"
          onClick={clickHandler}
          aria-controls={open ? "layer" : undefined}
          aria-expanded={open ? "true" : undefined}
        >
          <LayersIcon sx={{ fontSize: "1.8rem" }} />
        </CircularButton>
      </Tooltip>
      <Menu
        id="layer"
        open={open}
        anchorEl={anchorEl}
        onClose={closeHandler}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Box
          sx={{
            gap: "10px",
            px: "10px",
            display: "flex",
            alignItems: "start",
          }}
        >
          {mapProviders.map((map) => (
            <LayerCard
              key={map.image}
              active={active}
              mapName={map.name}
              imageUrl={map.image}
              onClick={() => onLayerSelectHandler(map.layer, map.name)}
            />
          ))}
        </Box>
      </Menu>
    </>
  );
};