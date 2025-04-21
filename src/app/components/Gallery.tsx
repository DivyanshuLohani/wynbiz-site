"use client";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { config } from "../lib/config";

const MarqueeGallery = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Initialize Three.js
  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    if (threeContainerRef.current) {
      threeContainerRef.current.innerHTML = "";
      threeContainerRef.current.appendChild(renderer.domElement);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [isHovering]);

  // Setup Intersection Observer to detect when gallery comes into view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(containerRef.current!);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // We need to duplicate items to ensure smooth infinite scroll
  // For proper seamless loop, we need exactly enough items to fill the container twice
  const duplicatedItems = [...config.gallery, ...config.gallery];

  return (
    <section className="relative w-full min-h-screen py-16 overflow-hidden">
      {/* Three.js background container */}
      <div
        ref={threeContainerRef}
        className="fixed top-0 left-0 w-full h-full z-1 pointer-events-none"
      />

      {/* Title with entrance animation */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white-600 mb-4 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Our <span className="text-cyan-400">Creative</span> Work
        </h2>
        <p
          className={`text-lg text-gray-200 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Explore our latest designs and illustrations created by our{" "}
          <span className="text-cyan-500 font-bold">talented</span> team
        </p>
      </div>

      {/* Marquee container */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col justify-center items-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Top row - slow, left to right */}
        <div className="w-full overflow-hidden mb-8">
          <div
            className={`flex transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 marquee-row"
                : "opacity-0 transform -translate-x-full"
            }`}
            style={{
              animationDuration: "60s",
              animationDirection: "normal",
              animationDelay: "0.2s",
              animationPlayState: isLoaded ? "running" : "paused",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`top-${index}`} className="flex-shrink-0 w-48 mx-2">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-300">
                  <img
                    src={`${item}?random=${index}`}
                    alt={`Gallery item ${index}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle row - medium speed, right to left */}
        <div className="w-full overflow-hidden mb-8">
          <div
            className={`flex transition-all duration-1000 delay-300 ease-out ${
              isLoaded
                ? "opacity-100 marquee-row"
                : "opacity-0 transform translate-x-full"
            }`}
            style={{
              animationDuration: "40s",
              animationDirection: "reverse",
              animationDelay: "0.4s",
              animationPlayState: isLoaded ? "running" : "paused",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`middle-${index}`} className="flex-shrink-0 w-80 mx-3">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-300">
                  <img
                    src={`${item}?random=${index + 100}`}
                    alt={`Gallery item ${index}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - fast, left to right */}
        <div className="w-full overflow-hidden">
          <div
            className={`flex transition-all duration-1000 delay-600 ease-out ${
              isLoaded
                ? "opacity-100 marquee-row"
                : "opacity-0 transform -translate-x-full"
            }`}
            style={{
              animationDuration: "50s",
              animationDirection: "normal",
              animationDelay: "0.6s",
              animationPlayState: isLoaded ? "running" : "paused",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`bottom-${index}`} className="flex-shrink-0 w-48 mx-2">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-300">
                  <img
                    src={`${item}?random=${index + 200}`}
                    alt={`Gallery item ${index}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .marquee-row {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeGallery;
