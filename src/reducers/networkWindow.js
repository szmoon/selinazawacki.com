function networkWindow(state = {}, action) {
  switch(action.type) {
    case 'NETWORK_WINDOW_OPEN' :
      return { ...state, open: true, position: [370, 400] };
    case 'NETWORK_WINDOW_CLOSE' :
      return { ...state, open: false };
    case 'NETWORK_WINDOW_POSITION' :
      return { ...state, position: action.index };
    case 'NETWORK_WINDOW_ZINDEX' :
      return { ...state, zIndex: action.zIndex };
    default:
      return state;
  }
}

export default networkWindow;