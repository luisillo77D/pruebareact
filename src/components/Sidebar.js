import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Sidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isDrawerOpen}
      sx={{
        width: isDrawerOpen ? 150 : 50,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isDrawerOpen ? 150 : 50,
          transition: 'width 0.2s',
        },
      }}
    >
      <List>
        {/* Botón para mostrar/ocultar el menú */}
        <ListItem>
          <Tooltip title={isDrawerOpen ? 'Ocultar' : 'Mostrar'} placement="right" arrow>
            <IconButton onClick={toggleDrawer} color="primary" variant="text" >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Inicio" placement="right" arrow>
            <IconButton component={Link} to="/" color="primary" variant="text">
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Formulario" placement="right" arrow>
            <IconButton component={Link} to="/formulario" color="primary" variant="text">
              <AssignmentIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Panel de Control" placement="right" arrow>
            <IconButton component={Link} to="/panel" color="primary" variant="text">
              <AssessmentIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Usuarios" placement="right" arrow>
            <IconButton component={Link} to="/usuarios" color="primary" variant="text">
              <AssessmentIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Muestras" placement="right" arrow>
            <IconButton component={Link} to="/muestras" color="primary" variant="text">
              <AssessmentIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
