import * as answerRepository from "../repositories/answerRepository"


export async function createAnswer({answeredBy, answer, questionId}: {answeredBy: string, answer: string, questionId: number}) {
    await answerRepository.insert({answeredBy, answer, questionId})
}


