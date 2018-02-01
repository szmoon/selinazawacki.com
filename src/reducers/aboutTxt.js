function aboutTxt(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_TXT_OPEN' :
      return { ...state, txt: true, position: [80, 300] };
    case 'ABOUT_TXT_CLOSE' :
      return { ...state, txt: false };
    case 'ABOUT_TXT_POSITION' :
      return { ...state, position: action.index };
    case 'ABOUT_TXT_ZINDEX' :
      return { ...state, zIndex: action.zIndex };
    default:
      return state;
  }
}

export default aboutTxt;