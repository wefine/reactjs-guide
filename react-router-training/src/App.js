import React from 'react';
import { Link } from 'react-router';

const app = (props) => {
    return (
        <div>
            <h1>React Router Tutorial</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/repos">Repos</Link></li>
            </ul>

            {/* 增加嵌套嵌套组件的引用 */}
            {props.children}
        </div>
    );
};

export default app;
