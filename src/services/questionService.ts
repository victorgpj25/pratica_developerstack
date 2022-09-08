import * as questionRepository from "../repositories/questionRepository"


export async function createQuestion({askedBy, question}: {askedBy: string, question: string}) {
    await questionRepository.insert({askedBy, question})
}

export async function getQuestions() {
    const questions = await questionRepository.find()

    return questions
}

export async function getQuestionWithAnswers(id: number) {
    const questionWithAnswers = await questionRepository.findById(id)

    return questionWithAnswers
}