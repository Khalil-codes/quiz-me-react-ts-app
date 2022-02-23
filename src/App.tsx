import React, { MouseEvent, useState } from "react";
import { Difficulty, fetchQuizQuestions } from "./API";
import "./App.css";
import QuestionCard from "./components/QuestionCard";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const TOTAL_QUESTIONS = 10;
    // Starting the Game
    const startQuiz = async () => {
        setLoading(true);
        const questions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        if (questions) console.log(questions);
        setLoading(false);
    };
    const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {};
    const nextQuestion = () => {};

    return (
        <div className="App">
            <h1>Quiz Me</h1>
            <button className="start" onClick={startQuiz}>
                Start
            </button>
            <p className="score">Score: </p>
            {loading && <div>Loading Questions</div>}
            {!loading && <div>Loaded...</div>}
            {/* <QuestionCard
                questionNumber={number + 1}
                totalQuestion={TOTAL_QUESTIONS}
                checkAnswer={checkAnswer}
                question={questions[number]}
                answers={questions[number]}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
            /> */}
            <button className="next" onClick={nextQuestion}>
                Next
            </button>
        </div>
    );
};

export default App;
