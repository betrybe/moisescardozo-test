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
};
export default actions;
