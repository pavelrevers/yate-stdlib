(function(yrExternals) {

    yrExternals['entity-scalar-list'] = yrExternals['entity-object-list'] = function(list, method, value) {
        var data;

        if (!list.length) {
            return;
        }

        data = list[0].data;

        if (!(method in data)) {
            throw new Error('entity-scalar-list: List doesn\'t have method "'+method+'"');
        }

        if (typeof value === 'undefined') {
            return data[method];
        } else {
            return data[method](value);
        }
    };

})(yr.externals);
