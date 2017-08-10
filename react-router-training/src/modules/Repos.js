import React from 'react';
import { Link } from 'react-router';

const repos = (props) => {
    return (
        <div>
            <h2>Repos</h2>
            {
                !props.params.repoName ?
                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>
                : ''
            }

            {props.children}
        </div>
    )
};

export default repos;