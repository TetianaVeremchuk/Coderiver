import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function getPoint() {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const x = r * sinPhi * cosTheta;
  const y = r * sinPhi * sinTheta;
  const z = r * cosPhi;
  return [x * 4, y * 4, z * 4];
}

const StarField = () => {
  const ref = useRef<THREE.Points>(null);

  const points = React.useMemo(() => {
    const vertices: number[] = [];
    for (let i = 0; i < 10000; i++) {
      vertices.push(...getPoint());
    }
    return new Float32Array(vertices);
  }, []);

  const mousePosition = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mousePosition.current.x * Math.PI * 0.2,
        0.1
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        mousePosition.current.y * Math.PI * 0.2,
        0.1
      );
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        sizeAttenuation
        alphaTest={0.5}
        transparent
        color="white"
      />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 5] }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <StarField />
    </Canvas>
  );
};

export default Scene;
