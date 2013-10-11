define("company/widgets/beauty-slideshow/js/init-beauty-slideshow-debug", [ "jquery/jquery/1.10.1/jquery-debug", "arale/switchable/1.0.0/slide-debug", "$-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "arale/easing/1.0.0/easing-debug" ], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    var Slide = require("arale/switchable/1.0.0/slide-debug");
    console.log($("#J_SlideShow .slideshow-trigger"));
    var beautySlide = new Slide({
        element: "#J_SlideShow",
        triggers: "#J_SlideShow .slideshow-trigger",
        panels: "#J_SlideShow .slideshow-pannel",
        activeTriggerClass: "slideshow-trigger-active",
        effect: "scrollx",
        interval: 3e3
    }).render();
});