import { createReducer } from './helpers';
import { EXAMPLE } from '../constants';

const initialState = {
  example: 'example',
};

const onExample = state => ({
  ...state,
});

export default createReducer(initialState, {
  [EXAMPLE]: onExample,
});
