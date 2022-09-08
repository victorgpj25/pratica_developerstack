import { Request, Response } from 'express';

import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  await questionService.createQuestion(req.body)

  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params
  const serviceBody: {
    answeredBy: string,
    answer: string,
    questionId: number
  } = {
    answeredBy: req.body.answeredBy,
    answer: req.body.answer,
    questionId: Number(id)
  }
  await answerService.createAnswer(serviceBody)

  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getQuestions()

  res.status(200).send(questions)
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params
  const question = await questionService.getQuestionWithAnswers(Number(id))

  res.status(200).send(question)
}
