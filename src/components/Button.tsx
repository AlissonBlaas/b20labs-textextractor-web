import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickButton: () => void
    textButton: string
}

const Button = ({ onClickButton, textButton, ...props }: IButton) => {
    return (
        <button
            onClick={onClickButton}
            className="bg-red-400 p-2 rounded-sm hover:opacity-70 max-w-40"
            {...props}
        >
            {textButton}
        </button>
    );
}

export default Button;