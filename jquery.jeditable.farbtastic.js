/**
 * Copyright Paolo Galeone (nessuno@nerdz.eu) - 2015
 * Released under GPL v3
 */

$.editable.addInputType('farbtastic', {
  element: function(settings, original) {
	  $(this).append('<div class="picker"></div>');
	  var hidden = $('<input type="hidden" />');
	  $(this).append(hidden);
	  return hidden;
  },

  content: function(data, settings, original) {
	  settings = $.extend({ farbtastic: {} }, settings);
	  var $hidden = $('input', this), $picker = $('.picker', this);
	  $.farbtastic($picker).linkTo(function(color) {
		  $hidden.val(color);
	  });
  }
});
