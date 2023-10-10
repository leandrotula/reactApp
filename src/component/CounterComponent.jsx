import PropTypes from "prop-types";
import {useState} from "react";

export const CounterComponent = ({value}) => {

    const [count, setCount] = useState(value)
    const handleAdd = () => {

        setCount((count) => count + 1)
    }

    function handleTake() {
        setCount((count) => count - 1)
    }

    function handleReset() {
        setCount(value)
    }

    return (
        <>
            <h1>Counter</h1>
            <p>value is : {count}</p>

            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleTake}>TAKE</button>
            <button onClick={handleReset}>RESET</button>

        </>
    )
}

CounterComponent.propTypes = {
    value: PropTypes.number.isRequired
};

CounterComponent.defaultProps = {
    value: 0
}