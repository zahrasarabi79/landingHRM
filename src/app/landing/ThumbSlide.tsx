import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { ISliderImages } from "./page";
import Icon from "../Components/Icon/Icon";

export interface IThumbSlide {
  slide: ISliderImages;
  index: number;
}

const ThumbSlide: FC<IThumbSlide> = ({ slide, index }) => {
  const hoverColor = {
    border: index === 3 ? "1px solid #4CAF50" : "1px solid #aee9ff",
    thumbBox: index === 3 ? "rgba(76, 175, 80, 0.50)" : "rgba(174, 233, 255,0.20)",
    thumbIcon: index === 3 ? "white" : "#aee9ff",
    fontColor: index === 3 ? "#4CAF50" : "#aee9ff",
  };
  return (
    <>
      <Box
        tabIndex={0}
        sx={{
          boxShadow: "0px 2.284px 15.986px 0px rgba(174, 233, 255, 0.25)",
          width: "100%",
          padding: 1,
          "&:hover": {
            transition: "opacity 800ms easein",
            border: hoverColor.border,
            ".thumb-box": {
              bgcolor: hoverColor.thumbBox,
            },
            ".thumb-icon": {
              backgroundColor: hoverColor.thumbIcon,
            },
            ".thumb-Font-color": {
              color: hoverColor.fontColor,
            },
          },
          "&:focus": {
            transition: "opacity 800ms easein",
            border: hoverColor.border,
            ".thumb-box": {
              bgcolor: hoverColor.thumbBox,
            },
            ".thumb-icon": {
              backgroundColor: hoverColor.thumbIcon,
            },
            ".thumb-Font-color": {
              color: hoverColor.fontColor,
            },
          },
          height: "100%",
          backgroundImage: `url(${slide.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "12px",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Box
              className="thumb-box"
              sx={{
                width: "30px",
                height: "30px",
                bgcolor: "rgba(253, 253, 253, 0.20)",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               
              }}
            >
              <Icon className="thumb-icon" pathName={slide.icon} size="20px" color="white" />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography className="thumb-Font-color" color="#FDFDFD" sx={{ fontSize: "12px", fontWeight: "700", lineHeight: "125%", textAlign: "right" }}>
              {slide.name}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ThumbSlide;
