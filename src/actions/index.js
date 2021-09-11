// Coloque aqui suas actions
const actions = {
  userAdd: (email) => ({
    payload: email,
    type: 'userAdd',
  }),
  userRemove: (email) => ({
    payload: email,
    type: 'userRemove',
  }),
  walletAdd: (despesa) => ({
    payload: despesa,
    type: 'walletAdd',
  }),
  walletRemove: (despesa) => ({
    payload: despesa,
    type: 'walletRemove',
  }),
};
export default actions;
