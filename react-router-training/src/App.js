import React from 'react';
import NavLink from './modules/NavLink';
import './App.css';

const app = (props) => {
    return (
        <div>
            <h1>React Router Tutorial</h1>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
            </ul>

            {/* 增加嵌套嵌套组件的引用 */}
            {props.children}
        </div>
    );
};

export default app;
