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
    console.log("fez a request")
    res.send(teachers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getSubjects (req: Request, res: Response) {
  try {
    const teachers = await examsService.getSubjects();
    console.log("fez a request")
    res.send(teachers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function findBySubjectId(req: Request, res: Response) {
  try {
      const subjectId = parseInt(req.params.id);
  
      const tests = await examsService.findBySubject(subjectId);

      console.log(subjectId)

  
      res.status(200).send(tests);            
  } catch(err) {
      res.status(500).send(err);
  }
}