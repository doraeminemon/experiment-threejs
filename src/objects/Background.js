import * as THREE from 'three'

export default function createBackground() {
  var geometry = new THREE.SphereGeometry(1800);
  var material = new THREE.MeshPhongMaterial({
    side: THREE.BackSide,
  });
  return new THREE.Mesh(geometry, material);
};