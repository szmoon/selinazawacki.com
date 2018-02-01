function aboutImage(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_IMAGE_OPEN' :
      return { ...state, image: true, position: [660, 150] };
    case 'ABOUT_IMAGE_CLOSE' :
      return { ...state, image: false };
    case 'ABOUT_IMAGE_POSITION' :
      return { ...state, position: action.index };
    case 'ABOUT_IMAGE_ZINDEX' :
      return { ...state, zIndex: action.zIndex };
    default:
      return state;
  }
}

export default aboutImage;