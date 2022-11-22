import { Answer } from "./Answer";

export interface Exercise {
    id: string,
    sectionId: string,
    title: string,
    description: string,
    exerciseNumber: number,
    content: string,
    onWrongFeedback: string,
    answers: Answer[]
}