import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const users = [
  { id: 1, name: "Usuario 1" },
  { id: 2, name: "Usuario 2" },
  { id: 3, name: "Usuario 3" },
  // Agrega más usuarios según sea necesario
];

const UserList = () => {
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} style={{ padding: "20px", minHeight: "80px" }}>
            <List>
              <ListItem>
                <ListItemText primary={user.name} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
