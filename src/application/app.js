import express from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { publicRoutes } from "../routes/public-api.js";
import { privateRoutes } from "../routes/private-api.js";
import bodyParser from "body-parser";
import cors from "cors";
import { adminRoutes } from "../routes/admin-api.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public/images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(publicRoutes);
app.use(adminRoutes);
app.use(errorMiddleware);
