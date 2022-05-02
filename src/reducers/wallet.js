// Esse reducer será responsável por tratar todas as informações relacionadas as despesas
import { USER_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
