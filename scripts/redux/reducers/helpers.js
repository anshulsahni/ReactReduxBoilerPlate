export const createReducer = (initialState, methods) => {
  return (state = initialState, action) => {
    if (methods[action.type]) {
      return methods[action.type](state, action);
    }
    return state;
  }
}
