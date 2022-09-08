import * as answerRepository from "../repositories/answerRepository"
import * as questionService from "../services/questionService"


export async function createAnswer({answeredBy, answer, questionId}: {answeredBy: string, answer: string, questionId: number}) {
    await questionService.validateQuestionId(questionId)
    await answerRepository.insert({answeredBy, answer, questionId})
}


