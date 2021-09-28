const http = require("http");

const server = http.createServer((peq, res) => {
  res.writeHead(200);
  res.end(
    "<h1>HOLA MUNDO desde servidor local<h1><h3>En modo de desarrollo.</h3>"
  );
});

const connectedServer = server.listen(4040, () => {
  console.log(
    `servidor http escuchando en el puerto... ${connectedServer.address().port}`
  );
});
//...................Servidor con Express........................

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res, next) {
  next();
  res.send(
    "<h1>HOLA MUNDO desde servidor local con Express<h1><h3>En modo de desarrollo.</h3>"
  );
});

const connectedServerDos = app.listen(port, () => {
  console.log(
    `servidor http escuchando en el puerto... ${
      connectedServerDos.address().port
    }`
  );
});
connectedServerDos.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);
