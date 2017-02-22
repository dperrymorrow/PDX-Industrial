(function () {
  "use strict";

  window.app = {
    imgLoaded: function(index) {
      document.querySelector('#grid-item-' + index).classList.add('loaded');
    },

  }

}());
