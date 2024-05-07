import React from 'react';
import cl from './App.module.scss';

export const App = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(prevState => prevState + 1)
    return (
        <div>
            <h1>{count}</h1>
            <button className={cl.button} onClick={increment}>inc</button>
        </div>
    );
};

