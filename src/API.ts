import { Difficulty, IQuestion, IQuestionState } from "./types.d";
import { shuffleArray } from "./utils";

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
