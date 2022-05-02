// Esse reducer será responsável por tratar todas as informações relacionadas as despesas
import { USER_CURRENCY, USER_EXPENSES } from '../actions';

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
  case USER_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
