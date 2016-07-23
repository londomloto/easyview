
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
    var 
        args = $.makeArray(arguments),
        init = $.type(options) !== 'string';
        
    var list, func;

    list = this.each(function(){
        var obj = $.data(this, 'easyview');
        if ( ! obj) {
            options = options || {};
            $.data(this, 'easyview', (obj = new Easyview(this, options)));
        }
        if ( ! init) {
            var method = args.shift();
            if (obj[method]) {
                func = obj[method].apply(obj, args);
            }
        }
    });

    return init ? list : func;
};

}())
