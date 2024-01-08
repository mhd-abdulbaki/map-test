"use client";

import React from "react";

// #Third-Party
import { useMap } from "react-leaflet";
import { ButtonGroup } from "@mui/material";

// ##Icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

// #Dev
// ##Shared-UI
import { GeneralButton } from "@/lib/shared";

export const ZoomControlModule = () => {
  // #Init
  const map = useMap();

  // #Handlers
  const zoomInHandler = () => {
    map.setZoom(map.getZoom() + 1);
  };
  const zoomOutHandler = () => {
    map.setZoom(map.getZoom() - 1);
  };

  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <GeneralButton
        tooltip="Zoom In"
        onClick={zoomInHandler}
        sx={{ borderRadius: "400px 0px 0px 400px" }}
      >
        <ZoomInIcon sx={{ fontSize: "1.8rem" }} />
      </GeneralButton>

      <GeneralButton
        tooltip="Zoom Out"
        onClick={zoomOutHandler}
        sx={{ borderRadius: " 0px 400px 400px 0px" }}
      >
        <ZoomOutIcon sx={{ fontSize: "1.8rem" }} />
      </GeneralButton>
    </ButtonGroup>
  );
};
