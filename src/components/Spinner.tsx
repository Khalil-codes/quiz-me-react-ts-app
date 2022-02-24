import React from "react";
import { SpinnerWrapper } from "../App.styles";

type Props = {};

const Spinner = (props: Props) => {
    return (
        <SpinnerWrapper>
            <div className="spinner"></div>
        </SpinnerWrapper>
    );
};

export default Spinner;
