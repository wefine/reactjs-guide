import React from 'react';
import NavLink from './NavLink';
import PropTypes from 'prop-types';

const repos = (props, context) => {

    const handleSubmit = event => {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        console.log(path);

        context.router.push(path);
    };

    return (
        <div>
            <h2>Repos</h2>
            <ul>
                <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                {/* add this form */}
                <li>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="userName"/> / {' '}
                        <input type="text" placeholder="repo"/>{' '}
                        <button type="submit">Go</button>
                    </form>
                </li>
            </ul>
            {props.children}
        </div>
    )
};

repos.contextTypes = {
    router: PropTypes.object
};


export default repos;

