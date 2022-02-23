import React, { FC, MouseEvent } from "react";

type Props = {
    question: string;
    answers: string[];
    checkAnswer: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: any;
    questionNumber: number;
    totalQuestion: number;
};

const QuestionCard: FC<Props> = ({
    question,
    answers,
    checkAnswer,
    userAnswer,
    questionNumber,
    totalQuestion,
}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <div>
                        <button disabled={userAnswer} onClick={checkAnswer}>
                            {answer}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
