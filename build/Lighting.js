"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighting = void 0;
var three_1 = require("three");
var Lighting = /** @class */ (function () {
    function Lighting(scene) {
        var geometry = new three_1.BoxBufferGeometry();
        var roomMaterial = new three_1.MeshStandardMaterial({
            metalness: 0,
            side: three_1.FrontSide,
        });
        var room = new three_1.Mesh(geometry, roomMaterial);
        room.scale.set(31, 28, 28);
        var mainLight = new three_1.PointLight(0xffffff, 35, 256, 1);
        mainLight.position.set(0.418, 16.199, 0.3);
        var hemiLight = new three_1.HemisphereLight(0xffffff, 0xffffff, 0.5);
        var shadowLight = new three_1.DirectionalLight(0xffffff, 1);
        shadowLight.position.set(1.2, 1, 0.2);
        shadowLight.castShadow = true;
        shadowLight.shadow.mapSize.set(2048, 2048);
        var lightOne = new three_1.DirectionalLight(0xffffff, 1);
        lightOne.position.set(5, 3, 1);
        var lightTwo = new three_1.DirectionalLight(0xffffff, 1);
        lightTwo.position.set(5, 3, 1);
        var lightThree = new three_1.DirectionalLight(0xffffff, 1);
        lightThree.position.set(5, 3, 1);
        var lightFour = new three_1.DirectionalLight(0xffffff, 1);
        lightFour.position.set(5, 3, 1);
        scene.add(room, mainLight, hemiLight, shadowLight, lightOne, lightTwo, lightThree, lightFour);
    }
    return Lighting;
}());
exports.Lighting = Lighting;
