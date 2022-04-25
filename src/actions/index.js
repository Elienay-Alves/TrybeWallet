// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';

export function updateUserInfo(payload) {
  return {
    type: USER_INFO,
    payload,
  };
}
