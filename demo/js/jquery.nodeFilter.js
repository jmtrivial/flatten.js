/*globals module, define, require*/
;
(function(factory) {

    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory($);
        });
    } else {
        factory(jQuery);
    }
}(function($) {

    'use strict';
    $.fn.nodeFilter = function(name) {
        var re = /(?=\[)/g,
            selectorArr = name.split(re),
            tagName = selectorArr[0],
            hasAttributes = "",
            i = 0;
        for (i = 1; i < selectorArr.length; i += 1) {
            hasAttributes += selectorArr[i];
        }
        return this.find('*').filter(function() {
            if (this.nodeName === tagName) {
                if (hasAttributes === "") {
                    return this;
                }
                if ($(this).is(hasAttributes)) {
                    return this;
                }
            }
        });
    };
}));
