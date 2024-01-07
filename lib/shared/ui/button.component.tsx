import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const GeneralButton = styled(Button)(() => ({
  height: "40px",
  minWidth: "20px",
  color: "#424649",
  border: "1px solid #42464980",
  backgroundColor: "#FFF !importent",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",

  "&:hover": {
    border: "1px solid #424649",
  },
}));

export const CircularButton = styled(GeneralButton)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "100%",
}));
