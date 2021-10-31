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
exports.OControls = void 0;
var OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
var OControls = /** @class */ (function (_super) {
    __extends(OControls, _super);
    function OControls(camera, canvas) {
        var _this = _super.call(this, camera, canvas) || this;
        _this.camera = camera;
        _this.canvas = canvas;
        _this.enableDamping = true;
        _this.screenSpacePanning = true;
        _this.enableZoom = false;
        _this.dampingFactor = 0.135;
        _this.rotateSpeed = 0.5;
        return _this;
    }
    Object.defineProperty(OControls.prototype, "orbitRotateSpeed", {
        set: function (speed) {
            this.rotateSpeed = speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OControls.prototype, "orbitDampingFactor", {
        set: function (factor) {
            this.orbitDampingFactor = factor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OControls.prototype, "replaceOrbitCamera", {
        set: function (camera) {
            this.object = camera;
        },
        enumerable: false,
        configurable: true
    });
    return OControls;
}(OrbitControls_1.OrbitControls));
exports.OControls = OControls;
