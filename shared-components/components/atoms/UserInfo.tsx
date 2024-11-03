import React, { useState } from "react";
import { IconButton, Menu } from "@mui/material";

/* Styles */
import { StyledMenuItem, StyledLabelMenuItem } from "../styles";

/* Icons*/
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

const UserInfo = () => {
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
        aria-controls={anchorEl ? "user-menu" : undefined}
        sx={{
          backgroundColor: "grey.300",
          "&:hover": {
            backgroundColor: "grey.400",
          },
          margin: "-12px",
          "@media (max-width: 600px)": {
            margin: "0px 5px 0 0",
          },
        }}
      >
        <PermIdentityOutlinedIcon sx={{ fill: "#757575" }} />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          position: "absolute",
          top: "20px",
          left: "-100px",
          "@media (max-width: 600px)": {
            left: "0px",
          },
        }}
      >
        <StyledMenuItem onClick={handleMenuClose}>
          <PermIdentityOutlinedIcon sx={{ fill: "#757575" }} />
          <StyledLabelMenuItem>Mi cuenta</StyledLabelMenuItem>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <ExitToAppOutlinedIcon
            sx={{ fill: "#757575", transform: "rotate(180deg)" }}
          />
          <StyledLabelMenuItem>Cerrar sesión</StyledLabelMenuItem>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <ContactSupportOutlinedIcon sx={{ fill: "#757575" }} />
          <StyledLabelMenuItem>Soporte</StyledLabelMenuItem>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <LocalPrintshopOutlinedIcon sx={{ fill: "#757575" }} />
          <StyledLabelMenuItem>Impresoras</StyledLabelMenuItem>
        </StyledMenuItem>
      </Menu>
    </div>
  );
};

export default UserInfo;
