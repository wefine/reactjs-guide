import { Button, Icon, Input } from 'antd'
import PropTypes from 'prop-types';
import React from 'react'


const Add = ({ onAdd, onChange, input }) => {
    return (
        <div>
            <Input
                placeholder="Enter your userName"
                prefix={<Icon type="user" />}
                value={input}
                onChange={onChange}
            />
            <Button type="primary" onClick={onAdd}>添加</Button>
        </div>
    )
};

Add.propTypes = {
    onAdd: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
};

export default Add;
