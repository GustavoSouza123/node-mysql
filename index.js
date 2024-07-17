import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/notes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(8080);