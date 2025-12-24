import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './GridScan.css';

const vert = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const frag = `
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec2 uSkew;
uniform float uTilt;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uScanOpacity;
varying vec2 vUv;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3(p, 2.0));

    float cR = cos(uTilt), sR = sin(uTilt);
    rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;

    vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
    rd.xy += skew * rd.z;

    vec3 color = vec3(0.0);
    float minT = 1e20;
    float gridScale = max(1e-5, uGridScale);
    float fadeStrength = 2.0;
    vec2 gridUV = vec2(0.0);

    for (int i = 0; i < 4; i++)
    {
        float isY = float(i < 2);
        float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
        float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
        float den = isY * rd.y + (1.0 - isY) * rd.x;
        float t = num / den;
        vec3 h = ro + rd * t;

        bool use = t > 0.0 && t < minT;
        gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
        minT = use ? t : minT;
    }

    vec3 hit = ro + rd * minT;
    float dist = length(hit - ro);

    float fx = fract(gridUV.x);
    float fy = fract(gridUV.y);
    float ax = min(fx, 1.0 - fx);
    float ay = min(fy, 1.0 - fy);
    float wx = fwidth(gridUV.x);
    float wy = fwidth(gridUV.y);
    float halfPx = max(0.0, uLineThickness) * 0.5;

    float tx = halfPx * wx;
    float ty = halfPx * wy;
    float aax = wx;
    float aay = wy;

    float lineX = 1.0 - smoothstep(tx, tx + aax, ax);
    float lineY = 1.0 - smoothstep(ty, ty + aay, ay);
    float lineMask = max(lineX, lineY);

    float fade = exp(-dist * fadeStrength);

    // Animated scan
    float scanZ = mod(iTime * 0.3, 2.0);
    float dz = abs(hit.z - scanZ);
    float scanLine = exp(-20.0 * dz);
    
    vec3 gridCol = uLinesColor * lineMask * fade;
    vec3 scanCol = uScanColor * scanLine * uScanOpacity;

    color = gridCol + scanCol;
    color = clamp(color, 0.0, 1.0);
    
    float alpha = clamp(max(lineMask * fade, scanLine * uScanOpacity), 0.0, 1.0);
    fragColor = vec4(color, alpha);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`;

export const GridScan = ({
  lineThickness = 1,
  linesColor = '#392e4e',
  scanColor = '#FF9FFC',
  scanOpacity = 0.4,
  gridScale = 0.1,
  sensitivity = 0.55,
  className,
  style
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const rafRef = useRef(null);

  const lookTarget = useRef(new THREE.Vector2(0, 0));
  const tiltTarget = useRef(0);
  const lookCurrent = useRef(new THREE.Vector2(0, 0));
  const lookVel = useRef(new THREE.Vector2(0, 0));
  const tiltCurrent = useRef(0);
  const tiltVel = useRef(0);

  const s = THREE.MathUtils.clamp(sensitivity, 0, 1);
  const skewScale = THREE.MathUtils.lerp(0.06, 0.2, s);
  const tiltScale = THREE.MathUtils.lerp(0.12, 0.3, s);
  const smoothTime = THREE.MathUtils.lerp(0.45, 0.12, s);
  const maxSpeed = Infinity;
  const yBoost = THREE.MathUtils.lerp(1.2, 1.6, s);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      lookTarget.current.set(nx, ny);
    };
    
    const onLeave = () => {
      lookTarget.current.set(0, 0);
      tiltTarget.current = 0;
    };
    
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const uniforms = {
      iResolution: { value: new THREE.Vector3(container.clientWidth, container.clientHeight, 1) },
      iTime: { value: 0 },
      uSkew: { value: new THREE.Vector2(0, 0) },
      uTilt: { value: 0 },
      uLineThickness: { value: lineThickness },
      uLinesColor: { value: new THREE.Color(linesColor).convertSRGBToLinear() },
      uScanColor: { value: new THREE.Color(scanColor).convertSRGBToLinear() },
      uGridScale: { value: gridScale },
      uScanOpacity: { value: scanOpacity }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      depthWrite: false,
      depthTest: false
    });
    materialRef.current = material;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      material.uniforms.iResolution.value.set(container.clientWidth, container.clientHeight, 1);
    };
    window.addEventListener('resize', onResize);

    const smoothDampVec2 = (current, target, velocity, smoothTime, deltaTime) => {
      smoothTime = Math.max(0.0001, smoothTime);
      const omega = 2 / smoothTime;
      const x = omega * deltaTime;
      const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
      
      let change = current.clone().sub(target);
      const temp = velocity.clone().addScaledVector(change, omega).multiplyScalar(deltaTime);
      velocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);
      
      return current.clone().sub(change).add(change.add(temp).multiplyScalar(exp));
    };

    let last = performance.now();
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
      last = now;

      const newLook = smoothDampVec2(lookCurrent.current, lookTarget.current, lookVel.current, smoothTime, dt);
      lookCurrent.current.copy(newLook);

      const skew = new THREE.Vector2(
        lookCurrent.current.x * skewScale,
        -lookCurrent.current.y * yBoost * skewScale
      );
      material.uniforms.uSkew.value.set(skew.x, skew.y);
      material.uniforms.uTilt.value = tiltCurrent.current * tiltScale;
      material.uniforms.iTime.value = now / 1000;
      
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      material.dispose();
      quad.geometry.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [lineThickness, linesColor, scanColor, scanOpacity, gridScale, skewScale, tiltScale, smoothTime, yBoost]);

  return (
    <div ref={containerRef} className={`gridscan${className ? ` ${className}` : ''}`} style={style} />
  );
};

export default GridScan;
