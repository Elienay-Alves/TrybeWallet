// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';
export const USER_CURRENCY = 'USER_CURRENCY';

export function updateUserInfo(payload) {
  return {
    type: USER_INFO,
    payload,
  };
}

export function userCurrency(currencies) {
  return {
    type: USER_CURRENCY,
    currencies,
  };
}

async function awesomeApi() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(URL);
  const response = await request.json();
  const responseResult = Object.keys(response).filter((cType) => cType !== 'USDT');
  return responseResult;
}

export const thunk = () => async (dispatch) => {
  const API = await awesomeApi();
  dispatch(userCurrency(API));
};
