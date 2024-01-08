import { ReactNode } from "react";

import { styled } from "@mui/material/styles";
import { Button, Tooltip } from "@mui/material";

const StykedButton = styled(Button)(() => ({
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

const StyldeCircularButton = styled(StykedButton)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "100%",
}));

interface IProps {
  children: ReactNode;
  sx?: {} | undefined;
  id?: string | undefined;
  tooltip?: string | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}

export const GeneralButton = ({
  children,
  tooltip,
  sx,
  id,
  onClick,
}: IProps) => {
  return (
    <Tooltip title={tooltip}>
      <StykedButton id={id} sx={{ ...sx }} onClick={onClick}>
        {children}
      </StykedButton>
    </Tooltip>
  );
};

export const CircularButton = ({
  children,
  tooltip,
  sx,
  id,
  onClick,
}: IProps) => {
  return (
    <Tooltip title={tooltip}>
      <StyldeCircularButton id={id} sx={{ ...sx }} onClick={onClick}>
        {children}
      </StyldeCircularButton>
    </Tooltip>
  );
};
