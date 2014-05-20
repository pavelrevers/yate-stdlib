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

    yrExternals['math-format-price'] = function(value, separator) {
        var decimal,
            decimalLength;

        value = String(value);
        separator = separator || '.';

        if (value.indexOf('.') < 0) {
            return value;
        }

        value = value.split('.');
        decimal = value[1];
        decimalLength = value[1].length;

        if (decimalLength == 1) {
            decimal += '0';
        } else if (decimalLength > 1) {
            decimal = decimal.substring(0,2);

            if (decimal == '00') {
                decimal = '';
                separator = '';
            }
        }

        return [value[0], separator, decimal].join('');
    };

})(yr.externals);
