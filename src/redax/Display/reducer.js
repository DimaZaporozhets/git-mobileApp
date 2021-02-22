import {
  DECREMENT,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  INCREMENT,
} from './types';

export const counterReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
};

const initialButtonState = {
  disabled: false,
};

export const blockButtons = (state = initialButtonState, action) => {
  switch (action.type) {
    case ENABLE_BUTTONS:
      return {...state, disabled: false};
    case DISABLE_BUTTONS:
      return {...state, disabled: true};
    default:
      return state;
  }
};
