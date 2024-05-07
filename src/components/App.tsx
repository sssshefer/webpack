import React from 'react';
import cl from './App.module.scss';
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(prevState => prevState + 1)
    return (
        <div>
            <Link to={'/about'}>about </Link>
            <br/>

            <Link to={'/shop'}>about </Link>

            <h1>{count}</h1>
            <button className={cl.button} onClick={increment}>inc</button>
            <Outlet/>
        </div>
    );
};

