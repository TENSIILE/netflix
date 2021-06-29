import {AnyAction} from 'redux';
import {INPUT_CHANGE} from '@/redux/types/inputs.type';

const initialState = {
  input: '',
};

interface InputState {
  input: string;
}

export const inputsReducer = (state: InputState = initialState, action: AnyAction): InputState => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};
