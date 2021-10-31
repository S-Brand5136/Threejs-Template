import {
  BoxBufferGeometry,
  DirectionalLight,
  FrontSide,
  Group,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  PointLight,
} from "three";

export class Lighting {
  constructor(scene: Group) {
    const geometry = new BoxBufferGeometry();

    const roomMaterial = new MeshStandardMaterial({
      metalness: 0,
      side: FrontSide,
    });

    const room = new Mesh(geometry, roomMaterial);
    room.scale.set(31, 28, 28);

    const mainLight = new PointLight(0xffffff, 35, 256, 1);
    mainLight.position.set(0.418, 16.199, 0.3);

    const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.5);

    const shadowLight = new DirectionalLight(0xffffff, 1);
    shadowLight.position.set(1.2, 1, 0.2);
    shadowLight.castShadow = true;
    shadowLight.shadow.mapSize.set(2048, 2048);

    const lightOne = new DirectionalLight(0xffffff, 1);
    lightOne.position.set(5, 3, 1);

    const lightTwo = new DirectionalLight(0xffffff, 1);
    lightTwo.position.set(5, 3, 1);

    const lightThree = new DirectionalLight(0xffffff, 1);
    lightThree.position.set(5, 3, 1);

    const lightFour = new DirectionalLight(0xffffff, 1);
    lightFour.position.set(5, 3, 1);

    scene.add(
      room,
      mainLight,
      hemiLight,
      shadowLight,
      lightOne,
      lightTwo,
      lightThree,
      lightFour
    );
  }
}
