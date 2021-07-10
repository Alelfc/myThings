import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/src';

const MathOperations = ({ onClickOperations, onClickEquals }) => (
    <section className="math-operations">
        <Button text={'+'} clickHandler={onClickOperations} />
        <Button text={'-'} clickHandler={onClickOperations} />
        <Button text={'*'} clickHandler={onClickOperations} />
        <Button text={'/'} clickHandler={onClickOperations} />
        <Button text={'='} clickHandler={onClickEquals} />
    </section>
)

MathOperations.propTypes = {
    onClickOperations: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired
}

export default MathOperations;