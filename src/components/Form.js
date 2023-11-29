import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem"; // Nueva importación para ComboBox
import { parseISO } from "date-fns";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const initialSample = {
  id: "",
  tipo: "",
  nombre: "",
  idUser: "",
  textura: "",
  fecha: "",
  caracteristicas: "",
  Quartz: 0,
  Plagioclase: 0,
  Feldspar: 0,
  Mafic: 0,
};

const SampleForm = () => {
  const [sample, setSample] = useState(initialSample);
  const [samples, setSamples] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Cargar muestras al montar el componente
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSample((prevSample) => ({ ...prevSample, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenDialog(false);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/muestras",
        sample
      );
      console.log(response.data);

      // Actualizar el estado de las muestras y limpiar el formulario
      setSamples((prevSamples) => [...prevSamples, response.data]);
      setSample(initialSample);
    } catch (error) {
      console.error("Error al agregar muestra:", error);
    }
  };
  const handleComboBoxChange = (e) => {
    const { name, value } = e.target;
    setSample((prevSample) => ({ ...prevSample, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSample((prevSample) => ({ ...prevSample, fecha: parseISO(date) }));
  };
  const generateComboBoxItems = () => {
    const items = [];
    for (let i = 0; i <= 100; i += 5) {
      items.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }
    return items;
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: "0" }}style={{ marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="ID"
              name="id"
              value={sample.id}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Tipo"
              name="tipo"
              value={sample.tipo}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={sample.nombre}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="textura"
              name="textura"
              value={sample.textura}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="caracteristicas"
              name="caracteristicas"
              value={sample.caracteristicas}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                fullWidth
                label="Fecha"
                name="fecha"
                value={sample.fecha}
                onChange={(newDate) => handleDateChange(newDate)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              fullWidth
              label="Quartz"
              name="Quartz"
              value={sample.Quartz}
              onChange={handleComboBoxChange}
              variant="outlined"
              margin="normal"
            >
              {generateComboBoxItems()}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              fullWidth
              label="Plagioclase"
              name="Plagioclase"
              value={sample.Plagioclase}
              onChange={handleComboBoxChange}
              variant="outlined"
              margin="normal"
            >
              {generateComboBoxItems()}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              fullWidth
              label="Feldspar"
              name="Feldspar"
              value={sample.Feldspar}
              onChange={handleComboBoxChange}
              variant="outlined"
              margin="normal"
            >
              {generateComboBoxItems()}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              fullWidth
              label="Mafic"
              name="Mafic"
              value={sample.Mafic}
              onChange={handleComboBoxChange}
              variant="outlined"
              margin="normal"
            >
              {generateComboBoxItems()}
            </TextField>
          </Grid>

          {/* Agrega más bloques Grid para otros campos TextField */}
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "30px" }}
              onClick={() => setOpenDialog(true)}
            >
              Agregar Muestra
            </Button>
          </Grid>
      </form>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Muestra agregada correctamente</DialogTitle>
        <DialogContent>
          {/* Contenido del formulario (puedes reutilizar el código del formulario) */}
          {/* ... (resto del código del formulario) ... */}
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>


      <ul>
        {samples.map((s) => (
          <li key={s.id}>
            {s.id} - {s.tipo} - {s.nombre}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SampleForm;
