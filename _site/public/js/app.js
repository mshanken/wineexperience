(function () {
  "use strict";
  window.sr = new ScrollReveal();

  var fooReveal = {
	delay    : 200,
	distance : '90px',
	easing   : 'ease-in-out',
	rotate   : { z: 10 },
	scale    : 1.1
  };

  sr.reveal('.evenends', fooReveal);
  sr.reveal('.evenends blockquote', fooReveal);

})($);