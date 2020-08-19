import * as THREE from 'three'

export default function createSphere() {
  var geometry = new THREE.BufferGeometry();
  geometry.fromGeometry(new THREE.OctahedronGeometry(600, 5));
  var material = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib['lights'],
      {
        time: {
          type: 'f',
          value: 0,
        },
        radius: {
          type: 'f',
          value: 1.0
        },
        distort: {
          type: 'f',
          value: 0.4
        }
      }
    ]),
    vertexShader: require('./glsl/object.vs').default,
    fragmentShader: require('./glsl/object.fs').default,
    lights: true,
  });
  return new THREE.Mesh(geometry, material);
}