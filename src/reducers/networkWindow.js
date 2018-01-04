function networkWindow(state = {}, action) {
  switch(action.type) {
    case 'NETWORK_WINDOW_OPEN' :
      return { ...state, open: true };
    case 'NETWORK_WINDOW_CLOSE' :
      return { ...state, open: false };
    default:
      return state;
  }
}

export default networkWindow;