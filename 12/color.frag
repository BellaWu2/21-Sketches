precision mediump float;

varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;
  vec3 color = vec3(uv.x, uv.y, 0.6);
  gl_FragColor = vec4(color, .6);
}