"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
var three_1 = require("three");
var Renderer = /** @class */ (function () {
    function Renderer(canvas) {
        this.webGl = new three_1.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: true,
        });
        this.webGl.toneMapping = three_1.ACESFilmicToneMapping;
        this.webGl.toneMappingExposure = 2;
        this.webGl.autoClear = true;
        var mPmremGenerator = new three_1.PMREMGenerator(this.webGl);
        mPmremGenerator.compileEquirectangularShader();
        this.webGl.outputEncoding = three_1.GammaEncoding;
        this.webGl.physicallyCorrectLights = true;
        this.webGl.setPixelRatio(window.devicePixelRatio);
        this.webGl.shadowMap.enabled = true;
        this.webGl.shadowMap.type = three_1.PCFSoftShadowMap;
    }
    return Renderer;
}());
exports.Renderer = Renderer;
