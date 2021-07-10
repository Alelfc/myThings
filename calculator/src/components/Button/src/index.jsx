import React from 'react';
import PropsTypes from 'prop-types';
import '../css/index.css';

const Button = ({ type, text, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropsTypes.string,
    text: PropsTypes.string.isRequired,
    clickHandler: PropsTypes.func.isRequired
}

export default Button;