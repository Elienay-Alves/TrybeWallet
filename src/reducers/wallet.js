// Esse reducer será responsável por tratar todas as informações relacionadas as despesas
import { USER_CURRENCY, USER_EXPENSES, DEL_USER_EXPENSE } from '../actions';

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
  case DEL_USER_EXPENSE:
    return {
      ...state,
      expenses: action.state,
    };
  default:
    return state;
  }
};

export default wallet;
