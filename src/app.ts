import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examsController from "./controllers/examsController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/exams", examsController.getExams);
app.get("/teachers", examsController.getTeachers);


export async function init () {
  await connectDatabase();
}

export default app;
