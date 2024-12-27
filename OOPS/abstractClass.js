var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile(model) {
        this.model = model;
    }
    Mobile.prototype.call = function () {
        console.log('Calling...');
    };
    return Mobile;
}());
// let mobile = new Mobile('Samsung'); // Error: Cannot create an instance of an abstract class.
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung(model) {
        var _this = _super.call(this, model) || this;
        _this.model = model;
        return _this;
    }
    Samsung.prototype.display = function () {
        console.log("Model: ".concat(this.model));
    };
    Samsung.prototype.call = function () {
        _super.prototype.call.call(this);
        console.log('Calling from Samsung...');
    };
    return Samsung;
}(Mobile));
var samsung = new Samsung('Samsung Galaxy S10');
samsung.display(); // Model: Samsung Galaxy S10
samsung.call();
/*

Calling....
Calling from Samsung...

*/
