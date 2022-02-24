import React, { FC } from "react";

type Props = {
    questionNumber: number;
    totalQuestion: number;
    score: number;
};

const DataDisplay: FC<Props> = ({ questionNumber, totalQuestion, score }) => {
    return (
        <div className="data-display">
            <p className="number">
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p className="score">Score: {score} </p>
        </div>
    );
};

export default DataDisplay;
