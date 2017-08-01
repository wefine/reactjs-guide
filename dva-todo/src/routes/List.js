import { connect } from 'dva';
import React from 'react';
import Add from '../components/Add';

import List from '../components/List';

const Lists = ({ dispatch, lists, inputs }) => {
  function handleDelete(id) {
    dispatch({
      type: 'lists/delete',
      payload: id
    });
  }

  function handleAdd() {
    dispatch({
      type: 'lists/add',
      payload: inputs.input
    });
  }

  function handelChange(e) {
    dispatch({
      type: 'inputs/change',
      payload: e.target.value
    });
  }

  return (
    <div>
      <Add onAdd={handleAdd} onChange={handelChange} input={inputs.input} />
      <br />
      <hr />
      <h2>List of Products</h2>
      <br />
      <List onDelete={handleDelete} lists={lists} />
    </div>
  );
};

const mapStateToProps = ({ inputs, lists }) => {
  // 属性解析赋值处理
  return { inputs, lists };
};

// export default Lists;
export default connect(mapStateToProps)(Lists);
