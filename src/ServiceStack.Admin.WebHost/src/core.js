System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var normalizeKey, isArray, log, normalize, getField;
    return {
        setters:[],
        execute: function() {
            exports_1("normalizeKey", normalizeKey = function (key) { return key.toLowerCase().replace(/_/g, ''); });
            isArray = function (o) { return Object.prototype.toString.call(o) === '[object Array]'; };
            log = function (o) { console.log(o, typeof (o)); return o; };
            exports_1("normalize", normalize = function (dto, into, deep) {
                return isArray(dto)
                    ? deep ? dto.map(function (o) { return normalize(o, null, deep); }) : dto
                    : typeof dto == "object"
                        ? Object.keys(dto).reduce(function (o, k) {
                            o[normalizeKey(k)] = deep ? normalize(dto[k]) : dto[k];
                            return o;
                        }, into || {})
                        : dto;
            });
            exports_1("getField", getField = function (o, name) {
                return o == null || name == null ? null :
                    o[name] ||
                        o[Object.keys(o).filter(function (k) { return normalizeKey(k) === normalizeKey(name); })[0] || ''];
            });
        }
    }
});
//# sourceMappingURL=core.js.map