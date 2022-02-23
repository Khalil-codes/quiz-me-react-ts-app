import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        /* background-color: #F0F0F0; */
        background-color: #21325E;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`;

export const AppWrapper = styled.div`
    position: relative;
    padding: 2rem;
    width: 600px;
    min-height: 400px;
    background-color: #f0f0f0;
    border-radius: 5px;

    h1 {
        text-align: center;
        border-bottom: 1px #ccc solid;
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .start {
        width: 100%;
        height: calc(400px - 4rem - 57px);
        display: flex;
        justify-content: center;
        align-items: center;
        .start-btn {
            padding: 10px 20px;
            cursor: pointer;
            border: 1px solid #3e497a;
            border-radius: 5px;
            font-size: 1.1rem;
            background-color: #3e497a;
            color: #fff;
            transition: all 200ms linear;

            &:hover {
                background-color: #fff;
                color: #3e497a;
            }
        }
    }
    .data-display {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .next {
        position: absolute;
        cursor: pointer;
        width: calc(100% - 4rem);
        bottom: 2rem;
        border: 1px solid #3e497a;
        border-radius: 5px;
        font-size: 1.1rem;
        background-color: #3e497a;
        color: #fff;
        transition: all 200ms linear;
        :hover {
            background-color: #fff;
            color: #3e497a;
        }
        :disabled {
            background-color: rgba(62, 73, 122, 0.6);
            border-color: rgba(62, 73, 122, 0.6);
            cursor: not-allowed;
            :hover {
                background-color: rgba(62, 73, 122, 0.6);
                border-color: rgba(62, 73, 122, 0.6);

                color: #fff;
            }
        }
    }
`;

export const QuestionCardWrapper = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 1rem;

    p {
        font-size: 1.2rem;
    }
    .options-container {
        margin: 1rem 0;
        width: 100%;
        flex-direction: column;

        div {
            flex: 1;
            display: block;
            width: 100%;
            margin-bottom: 0.7rem;
        }
        div:last-of-type {
            margin-bottom: 0;
        }
    }
`;

type AnswerButtonsWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const AnswerButtonsWrapper = styled.div<AnswerButtonsWrapperProps>`
    flex: 1;
    display: block;
    width: 100%;
    margin-bottom: 0.7rem;

    button {
        cursor: pointer;
        width: 100%;
        user-select: none;
        border: 1px solid #3e497a;
        border-radius: 5px;
        background-color: ${({ correct, userClicked }) =>
            correct
                ? "rgb(66, 186, 150, 0.5)"
                : !correct && userClicked
                ? "rgb(223, 71, 89, 0.5)"
                : "transparent"};
        :disabled {
            color: rgba(0, 0, 0, 0.7);
            cursor: not-allowed;
        }
        span {
            font-size: 1rem;
        }
    }
`;
