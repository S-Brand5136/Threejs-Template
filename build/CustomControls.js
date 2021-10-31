"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomControls = void 0;
var orbitControls_1 = require("./threejs-components/orbitControls");
var trackballControls_1 = require("./threejs-components/trackballControls");
var CustomControls = /** @class */ (function () {
    function CustomControls(camera, canvas) {
        this.camera = camera;
        this.canvas = canvas;
        this.orbitControls = new orbitControls_1.OControls(camera, canvas);
        this.trackballControls = new trackballControls_1.TballControls(camera, canvas);
    }
    return CustomControls;
}());
exports.CustomControls = CustomControls;
