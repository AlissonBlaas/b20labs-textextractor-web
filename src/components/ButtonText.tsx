import React from 'react';

interface IButtonText extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickButton: () => void
    textButton: string
}

const ButtonText = ({ onClickButton, textButton, ...props }: IButtonText) => {
    return (
        <button
            type="button"
            onClick={onClickButton}
            className="ml-4"
            {...props}
        >
            {textButton}
        </button>
    );
}

export default ButtonText;