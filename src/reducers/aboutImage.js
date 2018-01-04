function aboutImage(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_IMAGE_OPEN' :
      return { ...state, image: true };
    case 'ABOUT_IMAGE_CLOSE' :
      return { ...state, image: false };
    default:
      return state;
  }
}

export default aboutImage;