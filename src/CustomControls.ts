import { PerspectiveCamera } from "three";
import { OControls } from "./threejs-components/orbitControls";
import { TballControls } from "./threejs-components/trackballControls";

export class CustomControls {
  orbitControls: OControls;
  trackballControls: TballControls;

  constructor(public camera: PerspectiveCamera, public canvas: HTMLElement) {
    this.orbitControls = new OControls(camera, canvas);
    this.trackballControls = new TballControls(camera, canvas);
  }
}
