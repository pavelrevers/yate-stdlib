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
        nodeset.forEach(function(item) {
            result += Number(item.data);
        });

        return result;
    };

    yrExternals['math-procedure'] = function(list) {
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
