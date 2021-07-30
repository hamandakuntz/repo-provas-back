import { Request, Response } from "express";

import * as examsService from "../services/examsServices";

export async function getExams (req: Request, res: Response) {
  try {
    const exams = await examsService.getExams();
    res.send(exams);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getTeachers (req: Request, res: Response) {
  try {
    const teachers = await examsService.getTeachers();
    res.send(teachers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
