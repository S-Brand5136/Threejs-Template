import {
  ACESFilmicToneMapping,
  GammaEncoding,
  PCFSoftShadowMap,
  PMREMGenerator,
  WebGLRenderer,
} from "three";

export class Renderer {
  public webGl: WebGLRenderer;

  constructor(canvas: HTMLElement) {
    this.webGl = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });

    this.webGl.toneMapping = ACESFilmicToneMapping;
    this.webGl.toneMappingExposure = 2;
    this.webGl.autoClear = true;

    const mPmremGenerator = new PMREMGenerator(this.webGl);
    mPmremGenerator.compileEquirectangularShader();

    this.webGl.outputEncoding = GammaEncoding;
    this.webGl.physicallyCorrectLights = true;
    this.webGl.setPixelRatio(window.devicePixelRatio);

    this.webGl.shadowMap.enabled = true;

    this.webGl.shadowMap.type = PCFSoftShadowMap;
  }
}
