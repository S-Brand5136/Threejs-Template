import { PerspectiveCamera } from "three";

export class Camera extends PerspectiveCamera {
  constructor(
    fov: number,
    canvas: HTMLElement,
    nearPlane: number,
    farPlane: number
  ) {
    super(fov, canvas.clientHeight / canvas.clientWidth, nearPlane, farPlane);

    this.position.set(5, 0, 0);
    this.scale.setScalar(1);
  }
}
