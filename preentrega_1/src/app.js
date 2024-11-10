import express from "express";
import paths from './utils/path.js';

import routerRecords from "./routes/records.router.js"
import routerArtists from "./routes/artists.router.js"


const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true}));

//Middleware
app.use(express.json())

app.use("/api/public", express.static("./src/public"))

app.use("/api/records", routerRecords);
app.use("/api/artists", routerArtists);

// Se levanta el servidor oyendo en el puerto definido
app.listen(PORT, () => {
    console.log(`Ejecutándose en http://localhost:${PORT}`);
});