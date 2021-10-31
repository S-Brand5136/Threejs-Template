"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
var three_1 = require("three");
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera(fov, canvas, nearPlane, farPlane) {
        var _this = _super.call(this, fov, canvas.clientHeight / canvas.clientWidth, nearPlane, farPlane) || this;
        _this.position.set(5, 0, 0);
        _this.scale.setScalar(1);
        return _this;
    }
    return Camera;
}(three_1.PerspectiveCamera));
exports.Camera = Camera;
