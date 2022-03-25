import React, {useState} from "react";

const Homepage = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }

        if (count > 0) {
            console.log('test')
        }

        window.parent.postMessage('userName', '*');

    }

    const reset = () => setCount(0)

    return (
        <>
            <p>Counter: {count}</p>
            <div className='buttons'>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset} className="reset">reset</button>
            </div>
        </>
    );
}

export default Homepage;
