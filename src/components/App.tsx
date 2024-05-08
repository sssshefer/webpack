import React from 'react';
import cl from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import {About} from "@/pages/About";
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import AppImage from '@/assets/app-image.svg'

// This function is redundant and tree shaking will remove it
function treeShakingRedundantFunction(a:number) {
    console.log('I am redundant function')
}

export const App = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(prevState => prevState + 1)
    treeShakingRedundantFunction('123')
    return (
        <div>
            <Link to={'/about'}>about </Link>
            <br/>

            <Link to={'/shop'}>shop </Link>
             <h2>PLATFORM={__PLATFORM__}</h2>
            <h1>{count}</h1>
            <button className={cl.button} onClick={increment}>inc</button>
            <Outlet/>
            <About/>
            <img width={100} src={avatarPng} alt="pic"/>
            <img width={100} src={avatarJpg} alt="pic"/>
            <AppImage style={{color:'blue'}} width={50} height={50}/>
        </div>
    );
};

