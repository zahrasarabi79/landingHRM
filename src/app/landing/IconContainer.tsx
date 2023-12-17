import { Box } from "@mui/material";
import React, { FC } from "react";
import Icon from "../Components/Icon/Icon";
export interface IIconContainerProps {
  icon: string;
  children: ReactNode;width:string,height:string,bgcolor:string, borderRadius:string

}
const IconContainer: FC<IIconContainerProps> = ({ icon, children ,width,height,bgcolor, borderRadius ,style}) => {
  return (
    <Box
      className="thumb-box"
      sx={{ width: "30px", height: "30px", bgcolor: "rgba(253, 253, 253, 0.20)", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center" ,...style }}
    >
      {children}
      <Icon className="thumb-icon" pathName={icon} size="20px" color="white" />
    </Box>
  );
};

export default IconContainer;
