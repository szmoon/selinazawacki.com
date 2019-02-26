var exports = module.exports = {

  app: function(state) {
    return {
      // aboutWindow: state.aboutWindow,
      // networkWindow: state.networkWindow
    };
  },

  aboutWindow: function(state) {
    return {
      aboutWindow: state.aboutWindow
    };
  },

  aboutTxt: function(state) {
    return {
      aboutTxt: state.aboutTxt
    };
  },

  aboutImage: function(state) {
    return {
      aboutImage: state.aboutImage
    };
  },

  contactTxt: function(state) {
    return {
      contactTxt: state.contactTxt
    };
  },

  network: function(state) {
    return {
      networkWindow: state.networkWindow
    };
  }
};