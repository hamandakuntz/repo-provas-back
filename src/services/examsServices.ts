import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Exams from "../entities/Exams";
import Teachers from "../entities/Teachers";
import Subjects from "../entities/Subjects";


export async function getExams () {
  const exams = await getRepository(Exams).find();
  
  return exams;
}

export async function getTeachers () {
  const teachers = await getRepository(Teachers).find();  
  return teachers;
}

export async function getSubjects () {
  const subjects = await getRepository(Subjects).find();  
  return subjects;
}

export async function findBySubject(subjectId: number) {
  const tests = await getRepository(Exams).find({
      select: ['categoryId', 'id', 'link', 'teacherId', 'subjectId', 'semesterId'],
      where: [{subjectId: subjectId}]
  })
  console.log("oi")
  return tests;
}

