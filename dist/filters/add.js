var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var Add = (function (_super) {
    __extends(Add, _super);
    function Add() {
        _super.apply(this, arguments);
        this.operator = 'add';
    }
    return Add;
})(binary_expression_1.BinaryExpression);
exports.Add = Add;
//# sourceMappingURL=add.js.map