import React, { useState } from "react";
import { IconButton, Menu, Grid } from "@mui/material";

/* Styles */
import {
  StyledMenuItemGeneralMenu,
  StyledLabelMenuItemGeneralMenu,
} from "../../styles/components/styles";

/* Icons*/
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import CallMergeOutlinedIcon from "@mui/icons-material/CallMergeOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const GeneralMenu = () => {
  const menuItems = [
    {
      icon: <AssignmentReturnOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Hub",
    },
    {
      icon: <CallMergeOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Etiqueta<br/>consolidadora",
    },
    {
      icon: <SwapVertOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Control<br/>de muelles",
    },
    {
      icon: <FeedbackOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Inconsistencias<br/>Checkpoint",
    },
    {
      icon: <PendingOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Guías<br/>en proceso",
    },
    {
      icon: <LocalShippingOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Recogida",
    },
    {
      icon: <LocalShippingOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Reparto",
    },
    {
      icon: <FindInPageOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "NyS",
    },
    {
      icon: <SettingsOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Configuración",
    },
    {
      icon: <ManageSearchOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Tracking",
    },
    {
      icon: <HandshakeOutlinedIcon sx={{ fill: "#757575" }} />,
      label: "Acuerdos",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleMenuClick}
        aria-haspopup="true"
        aria-controls={anchorEl ? "generl-menu" : undefined}
        sx={{
          margin: "-12px",
          "@media (max-width: 600px)": {
            margin: "0px 5px 0 0",
          },
        }}
      >
        <AppsOutlinedIcon sx={{ fill: "#757575" }} />
      </IconButton>
      <Menu
        id="grid-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          position: "absolute",
          top: "20px",
          right: "0",
          "@media (max-width: 600px)": {
            top: "0px",
          },
        }}
        PaperProps={{
          style: {
            width: "350px",
          },
        }}
      >
        <Grid container spacing={0.5} padding={1}>
          {menuItems.map((item: any, index: number) => (
            <Grid item xs={4} key={index}>
              <StyledMenuItemGeneralMenu onClick={handleMenuClose}>
                {item.icon}
                <StyledLabelMenuItemGeneralMenu
                  dangerouslySetInnerHTML={{
                    __html: item.label,
                  }}
                />
              </StyledMenuItemGeneralMenu>
            </Grid>
          ))}
        </Grid>
      </Menu>
    </div>
  );
};

export default GeneralMenu;
