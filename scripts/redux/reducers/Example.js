import { EXAMPLE } from './constants';

const initialState = {};

const onExample = (state, action) => {
  return { state };
}

export default createReducer(initialState, {
  [EXAMPLE]: onExample
});
