# Yate Standard Lib

Batch of usefull helpers for [yate](https://github.com/pasaran/yate)

## borschik
  * borschik-link(str) - bridge to [borschik.link](https://github.com/bem/borschik)

## cookie
  * cookie(name) - bridge to [jQuery.cookie plugin](http://plugins.jquery.com/cookie/)

## date
  * date-is-today(unix-timestamp)
  * date-is-week-current(unix-timestamp)
  * date-is-yesterday(unix-timestamp)
  * date-now()
  * date-today-date()

## math
  * math-abs(number)
  * math-random()
  * math-round(number)

## modernizr
  * modernizr(prop) - bridge to [Modernizr](https://github.com/Modernizr/Modernizr)

## string
  * encode-uri-component(str)
  * str-contains(str, substr)
  * str-length(str)
  * str-substr(str, start, length)
  * str-substr-after(str, search)
  * str-substr-before(str, search)
  * str-to-lower(str)
  * str-to-upper(str)

##entity
###entity-list
  * function-name(List, method, [value])
  * entity-scalar-list(nodeset, scalar, scalar)
  * entity-object-list(nodeset, scalar, scalar)

Данные:

    List({
        id:     'id',
        type:   'type',
        map:    ['id1', 'id2', 'id3', 'id4', 'id5'],
        length: 5,
        '0':    1,
        '1':    2,
        '2':    3,
        '3':    {
            'id': 'jopa'
        },
        '4':    [
            {'id': 'obj1'},
            {'id': 'obj2'}
        ]
    });

Пример использования:

    "listItem scalar: { entity-scalar-list(.list, 'get', 'id3') }"
    "listItem object: { entity-object-list(.list, 'get', 'id4').id }"
    "listItem object (result array): { entity-object-list(.list, 'get', 'id5').*.id }"
