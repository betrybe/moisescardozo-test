// Esse reducer será responsável por tratar as informações da pessoa usuária
const typeAction = {
  userAdd: 'userAdd',
  userRemove: 'userRemove',
};
// CRIAR LOGIA PARA NAO FICAR COM 1 OBJ VAZIO
const INIT_STATE = [{ usuarios: '' }];
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
  // const { usuarios } = state;
  switch (action.type) {
  case typeAction.userAdd:
    return [
      ...state, {
        ...payload,
      },
    ];
  default:
    return state;
  }
};
export default user;
