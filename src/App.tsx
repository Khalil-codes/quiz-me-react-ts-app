import React, { MouseEvent, useState } from "react";
import { fetchQuizQuestions } from "./API";
import { AppWrapper, GlobalStyle } from "./App.styles";
import "./App.styles.ts";
import DataDisplay from "./components/DataDisplay";
import QuestionCard from "./components/QuestionCard";
import Spinner from "./components/Spinner";
import { Difficulty, IAnswerObject, IQuestionState } from "./types.d";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<IQuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<IAnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const TOTAL_QUESTIONS = 10;
    // Starting the Game
    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);
        const questions: IQuestionState[] = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        if (questions) setQuestions(questions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };
    const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
        if (gameOver) return;
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer === answer;
        if (correct) setScore((prev) => prev + 1);
        const answerObject: IAnswerObject = {
            question: questions[number].question,
            answer: answer,
            correct: correct,
            correctAnswer: questions[number].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
    };
    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <h1>Quiz Me</h1>
                {/* Handle Game Start */}
                {gameOver ? (
                    <div className="start">
                        <button className="btn start-btn" onClick={startQuiz}>
                            Start
                        </button>
                    </div>
                ) : null}
                {/* Handle Score and Question Number Section */}
                {!loading && !gameOver ? (
                    <DataDisplay
                        questionNumber={number + 1}
                        totalQuestion={TOTAL_QUESTIONS}
                        score={score}
                    />
                ) : null}
                {/* Handle Loading Section */}
                {loading && <Spinner />}

                {/* Handle Question Number*/}
                {!loading && !gameOver && (
                    <QuestionCard
                        checkAnswer={checkAnswer}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={
                            userAnswers ? userAnswers[number] : undefined
                        }
                    />
                )}
                {/* Handle Next Question Section */}
                {!loading && !gameOver && (
                    <button
                        className="next"
                        onClick={nextQuestion}
                        disabled={
                            !(userAnswers.length === number + 1) ||
                            number === TOTAL_QUESTIONS
                        }>
                        Next
                    </button>
                )}
            </AppWrapper>
        </>
    );
};

export default App;
