export const clickReducer = (state = {msg: ''}, action) => {
  switch(action.type) {
    case 'CLICK':
      return {...state, msg: 'Man of Certain Age Developer'}
    default:
      return state;
  }
}