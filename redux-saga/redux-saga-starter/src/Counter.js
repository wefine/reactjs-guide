/*eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({ value, onIncrementAsync, onIncrement, onDecrement }) =>
    <div>
        <button onClick={onIncrementAsync}>
            Increment after 1 second
        </button>
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>;

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrementAsync: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter
