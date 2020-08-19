import * as THREE from 'three'

export default function createPlaneForPostProcess(render_target) {
  var geometry_base = new THREE.PlaneGeometry(2, 2);
  var geometry = new THREE.BufferGeometry();
  geometry.fromGeometry(geometry_base);
  var material = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        type: 'f',
        value: 0,
      },
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
      },
      acceleration: {
        type: 'f',
        value: 0
      },
      texture: {
        type: 't',
        value: render_target,
      },
    },
    vertexShader: require('./glsl/posteffect.vs').default,
    fragmentShader: require('./glsl/posteffect.fs').default,
  });
  return new THREE.Mesh(geometry, material);
}