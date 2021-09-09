// Esse reducer será responsável por tratar as informações da pessoa usuária
const typeAction = {
  userAdd: 'userAdd',
  userRemove: 'userRemove',
};
const INIT_STATE = {
  email: '',
};
const user = (state = INIT_STATE, action) => {
  //   const { payload, type } = action;
  // switch (action.type) {
  // case typeAction.userAdd:
  //   return { ...state, user: state.user + 1 };
  // case typeAction.userRemove:
  //   return { ...state, user: state.user - 1 };
  // default:
  //   return state;
  const { payload } = action;
  const { email } = state;
  // console.log(state);
  switch (action.type) {
  case typeAction.userAdd:
    return { ...state, email: [...email, payload] };
  default:
    return state;
  }
};
export default user;
