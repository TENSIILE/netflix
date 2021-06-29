import {AnyAction} from 'redux';
import {INPUT_CHANGE} from '@/redux/types/inputs.type';

export const changeInputAction = (e: React.ChangeEvent<HTMLInputElement>): AnyAction => ({
  type: INPUT_CHANGE,
  payload: e.target.value,
});
