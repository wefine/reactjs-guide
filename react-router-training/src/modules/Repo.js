import React from 'react';

const Repo = (props) => {
    return (
        <div>
            <h2>{props.params["repoName"]}</h2>
        </div>
    )
};

export default Repo;