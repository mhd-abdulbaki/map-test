import { Switch, styled } from "@mui/material";

export const GeneralSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#424649",
  },

  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#424649",
  },
}));
