function contactTxt(state = {}, action) {
  switch(action.type) {
    case 'CONTACT_TXT_OPEN' :
      return { ...state, txt: true, position: [450, 480], zIndex: action.zIndex };
    case 'CONTACT_TXT_CLOSE' :
      return { ...state, txt: false };
    case 'CONTACT_TXT_POSITION' :
      return { ...state, position: action.index };
    case 'CONTACT_TXT_ZINDEX' :
      return { ...state, zIndex: action.zIndex };
    default:
      return state;
  }
}

export default contactTxt;