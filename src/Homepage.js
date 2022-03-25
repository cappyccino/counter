import React, {useState} from "react";

const Homepage = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <p>Counter: {count}</p>
            <div className='buttons'>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={() => false} className="reset">reset</button>
            </div>
        </>
    );
}

export default Homepage;
