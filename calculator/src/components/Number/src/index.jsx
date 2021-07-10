import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/src';

const arrayNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = onClickNumber => {
    return arrayNumbers.map(item => (
        <Button 
            key={item} 
            text={item.toString()} 
            clickHandler={onClickNumber} 
        />
    ))
}

const Number = ({ onClickNumber }) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
)

Number.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Number;