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
exports.TballControls = void 0;
var TrackballControls_1 = require("three/examples/jsm/controls/TrackballControls");
var TballControls = /** @class */ (function (_super) {
    __extends(TballControls, _super);
    function TballControls(camera, canvas) {
        var _this = _super.call(this, camera, canvas) || this;
        _this.camera = camera;
        _this.canvas = canvas;
        _this.noRotate = true;
        _this.noPan = true;
        _this.noZoom = false;
        _this.zoomSpeed = 0.2;
        _this.dynamicDampingFactor = 0.135;
        return _this;
    }
    Object.defineProperty(TballControls.prototype, "trackZoomDamping", {
        set: function (factor) {
            this.dynamicDampingFactor = factor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TballControls.prototype, "trackZoomSpeed", {
        set: function (speed) {
            this.zoomSpeed = speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TballControls.prototype, "trackReplaceCamera", {
        set: function (camera) {
            this.object = camera;
        },
        enumerable: false,
        configurable: true
    });
    return TballControls;
}(TrackballControls_1.TrackballControls));
exports.TballControls = TballControls;
