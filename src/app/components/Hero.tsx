"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function WynbizHeroSection() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement);

    // Create objects
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Create smaller spheres representing data points
    const createSphere = (
      x: number,
      y: number,
      z: number,
      brightness: number
    ) => {
      const sphereGeometry = new THREE.SphereGeometry(0.1, 24, 24);
      // Use grayscale colors with varying brightness
      const color = new THREE.Color(brightness, brightness, brightness);
      const sphereMaterial = new THREE.MeshStandardMaterial({ color });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, y, z);
      scene.add(sphere);
      return sphere;
    };

    // Create multiple spheres with different shades of white/gray
    const spheres = [
      createSphere(2, 0, 0, 1.0), // Pure white
      createSphere(-1.5, 1, 1, 0.9), // Light gray
      createSphere(0, -2, 0.5, 0.8), // Medium light gray
      createSphere(1, 1.5, -1, 0.7), // Medium gray
      createSphere(-2, -1, -1, 0.6), // Darker gray
    ];

    // Add lights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      // Animate spheres
      spheres.forEach((sphere, index) => {
        const time = Date.now() * 0.001;
        const radius = 2;
        sphere.position.x = Math.sin(time * (0.3 + index * 0.1)) * radius * 0.5;
        sphere.position.y =
          Math.cos(time * (0.2 + index * 0.05)) * radius * 0.3;
        sphere.position.z = Math.sin(time * (0.1 + index * 0.1)) * radius * 0.2;
      });

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Show content with animation
    setTimeout(() => setIsVisible(true), 500);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current?.removeChild(renderer.domElement);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      scene.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Three.js canvas container */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Wynbiz
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your Growth Partner for Marketing Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm p-6">
            <p className="text-4xl font-bold text-white">5+</p>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6">
            <p className="text-4xl font-bold text-white">100+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6">
            <p className="text-4xl font-bold text-white">24/7</p>
            <p className="text-gray-300">Support</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
