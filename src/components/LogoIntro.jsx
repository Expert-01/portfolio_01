import { useEffect, useRef } from "react"; import * as THREE from "three"; import { gsap } from "gsap";

export default function LogoIntro({ onFinish }) { const mountRef = useRef(null);

useEffect(() => { const mount = mountRef.current; const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
mount.appendChild(renderer.domElement);

// Cube geometry (initial state)
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x0077ff,
  roughness: 0.3,
  metalness: 0.8,
});
const cube = new THREE.Mesh(cubeGeometry, material);
scene.add(cube);

// Lights
const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

// Morph cube → sphere after 3 seconds
setTimeout(() => {
  const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
  gsap.to(cube.scale, { x: 0, y: 0, z: 0, duration: 0.8 });

  const orb = new THREE.Mesh(sphereGeometry, material);
  orb.scale.set(0, 0, 0);
  scene.add(orb);

  gsap.to(orb.scale, {
    x: 1,
    y: 1,
    z: 1,
    duration: 1.2,
    delay: 0.8,
    ease: "power2.out",
  });

  // Circular reveal
  setTimeout(() => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "#031531";
    overlay.style.borderRadius = "50%";
    overlay.style.zIndex = 1000;
    overlay.style.transform = "scale(0)";
    overlay.style.transition = "transform 1.5s ease-in-out";
    mount.appendChild(overlay);

    // Mickey-style circular reveal
    requestAnimationFrame(() => {
      overlay.style.transform = "scale(30)";
    });

    setTimeout(() => {
      overlay.remove();
      if (onFinish) onFinish();
    }, 1500);
  }, 2000);
}, 3000);

return () => {
  mount.removeChild(renderer.domElement);
};

}, [onFinish]);

return <div ref={mountRef} className="fixed inset-0 z-[9999] bg-[#031531]" />; }

