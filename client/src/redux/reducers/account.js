function accountReducer(state = [], action) {
  switch(action.type) {
    case 'SIGN_IN':
      return { currentUser: action.user }
    case 'LOAD_USER':
      return { currentUser: action.user }
    default:
      return state;
  }
}

export default accountReducer;
