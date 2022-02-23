import React, { FC, MouseEvent } from "react";
import { IAnswerObject } from "../types.d";

type Props = {
    question: string;
    answers: string[];
    checkAnswer: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: IAnswerObject | undefined;
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
                {answers.map((answer, idx) => (
                    <div key={idx}>
                        <button
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={checkAnswer}>
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
