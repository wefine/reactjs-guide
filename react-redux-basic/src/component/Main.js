import PropTypes from 'prop-types';
import React from 'react';

const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUsername('Anna')}>Change the Username
                    </button>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    changeUsername: PropTypes.func
};

export default Main;