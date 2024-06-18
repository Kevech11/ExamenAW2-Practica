const express = require('express');

const servidor = express();
const port = 3005;

//servidor q escucha todo el tiempo
servidor.listen(port, () => {
    console.log(`Servidor Express corriendo en http://localhost:${port}`);
  });
  