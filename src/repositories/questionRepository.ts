import { prisma } from "../config/database"


export interface Question {
    id: number;
    askedBy: string; 
    question: string;
}

export type questionInsertData = Omit<Question, "id">;

export async function insert(questionInsertData: questionInsertData) {
    await prisma.questions.create({
        data: questionInsertData
        
    })
}

export async function find() {
    const questions = await prisma.questions.findMany()
    return questions
}

export async function findById(id: number) {
    const question = await prisma.questions.findUnique({
        where: {
            id: id,
        },

    })
    return question
}


