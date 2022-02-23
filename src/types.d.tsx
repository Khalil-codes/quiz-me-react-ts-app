export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}
export interface IQuestion {
    category: string;
    correct_answer: string;
    difficulty: Difficulty;
    incorrect_answers: string[];
    question: string;
    type: string;
}
export interface IAnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export interface IQuestionState extends IQuestion {
    answers: string[];
}
