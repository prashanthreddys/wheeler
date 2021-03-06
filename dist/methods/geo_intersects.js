"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var GeoIntersects = (function (_super) {
    __extends(GeoIntersects, _super);
    function GeoIntersects(left, right) {
        _super.call(this);
        this.methodName = 'geo.intersects';
        this.expressions = [left, right];
    }
    return GeoIntersects;
}(method_expression_1.MethodExpression));
exports.GeoIntersects = GeoIntersects;
//# sourceMappingURL=geo_intersects.js.map