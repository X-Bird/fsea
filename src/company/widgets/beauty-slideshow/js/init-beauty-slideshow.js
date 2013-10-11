define(function(require, exports, module) {

	var $ = require('$');
	var Slide = require('slide');

	console.log($('#J_SlideShow .slideshow-trigger'));

	var beautySlide = new Slide({
	        element: '#J_SlideShow',
	        triggers: '#J_SlideShow .slideshow-trigger',
	        panels: '#J_SlideShow .slideshow-pannel',
	        activeTriggerClass: 'slideshow-trigger-active',
	        effect: 'scrollx',
	        interval: 3000
	    }).render();
	
});

