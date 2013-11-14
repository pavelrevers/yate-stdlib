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

    yrExternals['nodes-unique'] = function(nodes) {
        var cache = {},
            results = [];

        for (var i = 0, l = nodes.length, name; i < l; i++) {
            name = nodes[i].data;

            if (!cache.hasOwnProperty(name)) {
                cache[name] = null;
                results.push(nodes[i]);
            }
        }

        return results;
    };

    yrExternals['serialize'] = function(nodes) {
        var list = [],
            result = '';

        if (nodes.length > 1) {
            for (var i = 0, l = nodes.length; i < l; i++) {
                list.push(nodes[i].data)
            }

            result = JSON.stringify(list);
        } else if (nodes.length == 1) {
            result = JSON.stringify(nodes[0].data);
        }

        return result;
    };

})(yr.externals);
