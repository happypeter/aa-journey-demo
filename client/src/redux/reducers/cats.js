function cats(state = [], action) {
  switch(action.type) {
    case 'LOAD_CATS':
      return action.cats;
    default:
      return state;
  }
}

export default cats;
