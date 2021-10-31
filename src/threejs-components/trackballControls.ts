import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import { OrthographicCamera, PerspectiveCamera } from "three";

export class TballControls extends TrackballControls {
  constructor(public camera: PerspectiveCamera, public canvas: HTMLElement) {
    super(camera, canvas);

    this.noRotate = true;
    this.noPan = true;
    this.noZoom = false;
    this.zoomSpeed = 0.2;
    this.dynamicDampingFactor = 0.135;
  }

  set trackZoomDamping(factor: number) {
    this.dynamicDampingFactor = factor;
  }

  set trackZoomSpeed(speed: number) {
    this.zoomSpeed = speed;
  }

  set trackReplaceCamera(camera: PerspectiveCamera | OrthographicCamera) {
    this.object = camera;
  }
}
