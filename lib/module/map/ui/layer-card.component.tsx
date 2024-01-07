"use client";

// #Core
import React from "react";
import Image from "next/image";

// #Third-Party
import { Button, Paper, Typography, styled } from "@mui/material";

interface IProps {
  active: string;
  mapName: string;
  imageUrl: string;
  onClick: () => void;
}

export const LayerCard = ({ mapName, imageUrl, onClick, active }: IProps) => {
  return (
    <>
      <StyledPaper elevation={0}>
        <Button
          onClick={onClick}
          sx={{
            p: "0",
            mb: "4px",
            mx: "auto",
            width: "50px",
            height: "50px",
            minWidth: "50px",
            overflow: "hidden",
            borderRadius: "100%",
            border: `${
              active == mapName ? "3px solid #4caf50" : "2px solid #0000001f"
            }`,
          }}
        >
          <Image
            src={imageUrl}
            alt={mapName}
            width={50}
            height={50}
            style={{
              height: "100%",
              width: "100%",
              padding: "2px",
              objectFit: "fill",
              borderRadius: "100%",
            }}
          />
        </Button>
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "1.2",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {mapName}
        </Typography>
      </StyledPaper>
      <CR />
    </>
  );
};

// #Styled
const StyledPaper = styled(Paper)(() => ({
  width: "70px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const CR = styled("div")(() => ({
  width: "1px",
  height: "100px",
  background: "#0000001f",
  "&:last-child": {
    display: "none",
  },
}));
