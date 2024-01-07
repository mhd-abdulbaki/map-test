import { ReactNode } from "react";

// #Third-Party
import { Box } from "@mui/material";

export const ControlWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "10px",
        bottom: "10px",
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {children}
    </Box>
  );
};
