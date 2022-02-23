import React, { FC, MouseEvent } from "react";
import { AnswerButtonsWrapper, QuestionCardWrapper } from "../App.styles";
import { IAnswerObject } from "../types.d";

type Props = {
    question: string;
    answers: string[];
    checkAnswer: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: IAnswerObject | undefined;
};

const QuestionCard: FC<Props> = ({
    question,
    answers,
    checkAnswer,
    userAnswer,
}) => {
    return (
        <QuestionCardWrapper>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div className="options-container">
                {answers.map((answer, idx) => (
                    <AnswerButtonsWrapper
                        correct={answer === userAnswer?.correctAnswer}
                        userClicked={answer === userAnswer?.answer}
                        key={idx}>
                        <button
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={checkAnswer}>
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </AnswerButtonsWrapper>
                ))}
            </div>
        </QuestionCardWrapper>
    );
};

export default QuestionCard;
