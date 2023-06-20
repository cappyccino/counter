import React, {useState} from "react";

const Homepage = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)

    return (
        <>
            <p>Counter: {count}</p>
            <div className='buttons'>
                <button onClick={increment}>increment</button>
            </div>
        </>
    )
}

export default Homepage;
