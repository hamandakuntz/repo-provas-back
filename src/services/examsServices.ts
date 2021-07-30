import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Exams from "../entities/Exams";
import Teachers from "../entities/Teachers";


export async function getExams () {
  const exams = await getRepository(Exams).find();
  
  return exams;
}

export async function getTeachers () {
  const teachers = await getRepository(Teachers).find();
  
  return teachers;
}
