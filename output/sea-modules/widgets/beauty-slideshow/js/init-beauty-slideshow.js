define("company/widgets/beauty-slideshow/js/init-beauty-slideshow", [ "jquery/jquery/1.10.1/jquery", "arale/switchable/1.0.0/slide", "$", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events", "arale/easing/1.0.0/easing" ], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery");
    var Slide = require("arale/switchable/1.0.0/slide");
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