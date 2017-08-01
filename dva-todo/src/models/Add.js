export default {
  namespace: 'inputs',
  state: {
    input: 'name'
  },
  reducers: {
    change(state, { payload: name }) {
      return { input: name };
    }
  }
};
