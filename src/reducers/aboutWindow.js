function aboutWindow(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_WINDOW_OPEN' :
      return { ...state, open: true, position: [400, 50] };
    case 'ABOUT_WINDOW_CLOSE' :
      return { ...state, open: false };
    case 'ABOUT_WINDOW_POSITION' :
      return { ...state, position: action.index };
    case 'ABOUT_WINDOW_ZINDEX' :
      return { ...state, zIndex: action.zIndex };
    case 'ABOUT_TXT_OPEN' :
      return { ...state, txt: true };
    case 'ABOUT_TXT_CLOSE' :
      return { ...state, txt: false };
    case 'ABOUT_IMAGE_OPEN' :
      return { ...state, image: true };
    case 'ABOUT_IMAGE_CLOSE' :
      return { ...state, image: false };
    default:
      return state;
  }
}

export default aboutWindow;