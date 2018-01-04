function aboutTxt(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_TXT_OPEN' :
      return { ...state, txt: true };
    case 'ABOUT_TXT_CLOSE' :
      return { ...state, txt: false };
    default:
      return state;
  }
}

export default aboutTxt;