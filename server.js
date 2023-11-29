const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const cors = require('cors');
// ...

app.use(cors());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admi',
  password: '1234',
  database: 'prueba',
});

db.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.message);
      throw err;
    }
    console.log('Conexión a la base de datos establecida');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/registrar', (req, res) => {
  const { campo1, campo2} = req.body;

  const sql = 'INSERT INTO usuarios (Nombre, contrasena) VALUES (?, ?)';
  const values = [campo1, campo2];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al guardar el registro');
      return;
    }

    res.status(200).send('Registro guardado correctamente');
  });
});

app.post('/api/muestras', async (req, res) => {
  try {
    const { id,tipo, nombre, clasifico, textura, fecha, caracteristicas, Quartz, Plagioclase, Feldspar, Mafic } = req.body;
    const sql = 'INSERT INTO muestras (id,tipo, nombre, clasifico, textura, fecha, caracteristicas, Quartz, Plagioclase, Feldspar, Mafic) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    res.json(resultado);
    connection.query(sql, [id,tipo, nombre, clasifico, textura, fecha, caracteristicas, Quartz, Plagioclase, Feldspar, Mafic], (err, result) => {
      if (err) {
        console.error('Error al agregar muestra en MySQL:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        console.log('Muestra agregada correctamente en MySQL');
        res.status(201).json(result);
      }
    });
  } catch (error) {
    console.error('Error al agregar muestra:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/api/muestras', (req, res) => {
  const sql = 'SELECT * FROM muestras';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener muestras desde MySQL:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Muestras obtenidas correctamente desde MySQL');
      res.status(200).json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
