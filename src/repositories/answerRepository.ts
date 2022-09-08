import { prisma } from "../config/database"


export interface Answer {
    id: number;
    answeredBy: string; 
    answer: string;
    questionId: number;
}

export type answerInsertData = Omit<Answer, "id">;

export async function insert(answerInsertData: answerInsertData) {
    await prisma.answers.create({
        data: answerInsertData
        
    })
}
