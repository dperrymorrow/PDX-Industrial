//= require jquery/dist/jquery.js
//= require bootstrap.js
//= require swipebox/src/js/jquery.swipebox.js


$( 'a.gallery' ).swipebox({
  hideBarsOnMobile: false,
  hideCloseButtonOnMobile: false,
  hideBarsDelay : null,
  afterOpen: function () {
    debugger;
  }

});