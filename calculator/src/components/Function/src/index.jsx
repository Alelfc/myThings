import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/src';

const Function = ({ onContentClear, onDelete, rotation }) => (
    <section className="functions">
        <Button type='button-long-text' text={'clear'} clickHandler={onContentClear}></Button>
        <Button type='button-long-text' text={'del'} clickHandler={onDelete}></Button>
        <Button text='&larr;' clickHandler={rotation}></Button>
    </section>
)

Function.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onContentClear: PropTypes.func.isRequired
}

export default Function;