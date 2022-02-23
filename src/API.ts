import { shuffleArray } from "./utils";

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
export interface IQuestionState extends IQuestion {
    answers: string[];
}

export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty
) => {
    const URL = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data.results.map(
        (question: IQuestion): IQuestionState => ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
            ]),
        })
    );
};
