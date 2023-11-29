import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        height: 50,
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "20px", // Espacio a la derecha
      }}
    >
      <IconButton
        onClick={handleClick}
        color="inherit"
        size="medium"
        sx={{ marginLeft: 'auto' }}
      >
        <AccountCircleOutlinedIcon />
      </IconButton>

      {/* Menú persistente */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
            marginTop: '25px',  // Ajusta esta propiedad para cambiar la posición vertical del menú
          }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/perfil">
          Perfil
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/configuracion">
          Configuración
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Topbar;
