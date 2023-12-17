"use client";
import { Box, Grid, Divider, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Icon from "../Components/Icon/Icon";

const LandingNavbar = () => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isDownMedumeScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const buttonStyle = isDownSmallScreen
    ? {
        minWidth: 0,
        width: "30px",
        height: "30px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #FDFDFD",
      }
    : isDownMedumeScreen
    ? {
        minWidth: 0,
        width: "25px",
        height: "25px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #FDFDFD",
      }
    : {
        minWidth: 0,
        width: "45px",
        height: "45px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #FDFDFD",
      };

  const iconButtonSize = isDownSmallScreen ? "20px" : isDownMedumeScreen ? "16px" : "30px";
  const logoStyle = isDownSmallScreen
    ? {
        width: "40px",
        height: "40px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    : isDownMedumeScreen
    ? {
        width: "36px",
        height: "36px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    : {
        width: "65px",
        height: "65px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

  const contactUsButtonStyle = isDownMedumeScreen
    ? {
        width: "auto",
        height: "36px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #FDFDFD",
        padding: "8px 12px",
        gap: 1,
      }
    : {
        width: "auto",
        height: "45px",
        bgcolor: "rgba(253, 253, 253, 0.20)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #FDFDFD",
        padding: "8px 12px",
        gap: 1,
      };
  return (
    <Box sx={{ position: "absolute", color: "red", top: 0, left: 0, zIndex: 2  }}>
      <Grid container sx={{ flexDirection: "row", justifyContent: "center", width: "100vw" }}>
        <Grid item xs="auto" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box className="thumb-box" sx={logoStyle}>
            <Icon className="thumb-icon" pathName="../image/navbar-icon/pouyagaran.svg" size={iconButtonSize} color="white" />
          </Box>
          <Divider orientation="vertical" sx={{ mx: "10px" }} />
        </Grid>
        <Grid item xs="auto" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: isDownMedumeScreen ? "8.3px" : "15px" }}>
          <Button className="thumb-box" sx={buttonStyle}>
            <Icon className="thumb-icon" pathName="../image/navbar-icon/UserRounded.svg" size={iconButtonSize} color="white" />
          </Button>
          {!isDownSmallScreen && (
            <>
              <Button sx={buttonStyle}>
                <Icon className="thumb-icon" pathName="../image/navbar-icon/notification.svg" size={iconButtonSize} color="white" />
              </Button>
              <Button sx={buttonStyle}>
                <Icon pathName="../image/navbar-icon/Dialog.svg" size={iconButtonSize} color="white" />
              </Button>
            </>
          )}
        </Grid>
        <Grid item xs sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
          <Button
            className="thumb-box"
            sx={{
              width: "auto",
              height: isDownMedumeScreen ? "36px" : "45px",
              bgcolor: "rgba(253, 253, 253, 0.20)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #FDFDFD",
              padding: isDownMedumeScreen ? "8px 12px" : "10px 15px",
              gap: isDownMedumeScreen ? 1 : "10px",
            }}
          >
            <Icon className="thumb-icon" pathName="../image/navbar-icon/OutgoingCallRounded.svg" size={isDownMedumeScreen ? "20px" : "25px"} color="white" />
            <Typography color="white" sx={{ fontSize: isDownMedumeScreen ? "10px" : "12px", fontWeight: 400, lineHeight: "15px" }}>
              با ما تماس بگیرید
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingNavbar;
