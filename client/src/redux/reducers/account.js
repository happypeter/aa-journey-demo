function accountReducer(state = [], action) {
  switch(action.type) {
    case 'SIGN_IN':
      console.log('SIGN_IN');
      return {
        currentUser: action.user
      }
    default:
      return state;
  }
}

export default accountReducer;
