export const createReducer = (initialState, methods) => (state = initialState, action) => {
  if (methods[action.type]) {
    return methods[action.type](state, action);
  }
  return state;
};

export default {
  createReducer,
};
