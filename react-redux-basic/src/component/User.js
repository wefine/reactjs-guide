import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const User = ({name}) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {name}</p>
                </div>
            </div>
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        name: state.user.name
    }
};

export default connect(mapStateToProps)(User);