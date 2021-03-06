(function(yrExternals) {

    yrExternals['math-abs'] = function(num) {
        return Math.abs(num);
    };

    yrExternals['math-random'] = function() {
        return Math.round(Math.random() * 100000);
    };

    yrExternals['math-round'] = function(num) {
        return Math.round(num);
    };

    yrExternals['math-sum'] = function(nodeset) {
        var result = 0;

        for (var i = 0, l = nodeset.length; i < l; i++) {
            result += Number(nodeset[i].data);
        }

        return result;
    };

    yrExternals['math-procedure'] = function(list) {
        list = list.replace(/\s/g, '');

        if (!list.length) {
            return 0;
        }

        if (list.lastIndexOf(/\*|\/|\+|\-/)) {
            list = list.substr(0, list.length - 1);
        }

        try {
            return (new Function('return '+list)());
        } catch(e) {
            return 0;
        }
    };

})(yr.externals);
