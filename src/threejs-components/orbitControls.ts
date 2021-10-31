import { OrthographicCamera, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class OControls extends OrbitControls {
  constructor(public camera: PerspectiveCamera, public canvas: HTMLElement) {
    super(camera, canvas);

    this.enableDamping = true;
    this.screenSpacePanning = true;
    this.enableZoom = false;

    this.dampingFactor = 0.135;
    this.rotateSpeed = 0.5;
  }

  set orbitRotateSpeed(speed: number) {
    this.rotateSpeed = speed;
  }

  set orbitDampingFactor(factor: number) {
    this.orbitDampingFactor = factor;
  }

  set replaceOrbitCamera(camera: OrthographicCamera | PerspectiveCamera) {
    this.object = camera;
  }
}
