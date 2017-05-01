function cats(state = [], action) {
  switch(action.type) {
    case 'LOAD_CATS':
      return action.cats;
    case 'ADD_CAT':
      return [...state, {_id: action._id, name: action.name}];
    default:
      return state;
  }
}

export default cats;
