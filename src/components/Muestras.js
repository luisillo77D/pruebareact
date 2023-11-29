import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const Muestras = () => {
  const [samples] = useState([
    {
      id: 1,
      name: "Muestra 1",
      description: "Descripción de la muestra 1",
    },
    {
      id: 2,
      name: "Muestra 2",
      description: "Descripción de la muestra 2",
    },
    {
      id: 3,
      name: "Muestra 3",
      description: "Descripción de la muestra 3",
    },
  ]);

  const [selectedSample, setSelectedSample] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleEdit = (id) => {
    const selected = samples.find((sample) => sample.id === id);
    setSelectedSample(selected);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    const selected = samples.find((sample) => sample.id === id);
    setSelectedSample(selected);
    setDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    // Implementa la lógica para eliminar la muestra
    console.log("Eliminar muestra con ID:", selectedSample.id);
    setDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    // Cancela la acción de eliminación
    setSelectedSample(null);
    setDeleteConfirmation(false);
  };

  return (
    <div className="container mt-4" style={{ marginTop: '50px' }}>
      <h2>Muestras</h2>
      <Grid container spacing={2}>
        {samples.map((sample) => (
          <Grid item key={sample.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} style={{ padding: "20px", minHeight: "100px" }}>
              <Typography variant="h6">{sample.name}</Typography>
              <Typography variant="body2">{sample.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginRight: "8px" }}
                onClick={() => handleEdit(sample.id)}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDelete(sample.id)}
              >
                Eliminar
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal para la edición de muestra */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Editar Muestra</DialogTitle>
        <DialogContent>
          {selectedSample && (
            <form>
              <TextField
                label="Nombre"
                fullWidth
                margin="normal"
                value={selectedSample.name}
                onChange={(e) =>
                  setSelectedSample((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <TextField
                label="Descripción"
                fullWidth
                margin="normal"
                value={selectedSample.description}
                onChange={(e) =>
                  setSelectedSample((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={() => console.log("Guardar cambios")} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmación de eliminación */}
      <Dialog open={deleteConfirmation} onClose={cancelDelete}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Estás seguro de que deseas eliminar la muestra seleccionada?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="secondary">
            Cancelar
          </Button>
          <Button onClick={confirmDelete} color="primary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Muestras;
