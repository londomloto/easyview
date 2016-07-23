
(function(){

var Easyview = function(element, options) {
    this.element = $(element);
    this.init(options);
};

Easyview.defaults = {
    model: {},
    events: {}
};

Easyview.prototype = {
    init: function(options) {
        this.options = $.extend(true, {}, Easyview.defaults, options || {});
    }
};

$.fn.easyview = function(options) {
    
};

}())
