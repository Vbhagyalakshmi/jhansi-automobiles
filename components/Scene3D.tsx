"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Disc() {
  const g = useRef<Group>(null!);
  useFrame(({ pointer }, dt) => {
    g.current.rotation.z += dt * 0.25;
    g.current.rotation.x += (pointer.y * 0.5 + 1.1 - g.current.rotation.x) * 0.05;
    g.current.rotation.y += (pointer.x * 0.6 - g.current.rotation.y) * 0.05;
  });
  const steel = { color: "#b9bcc0", metalness: 1, roughness: 0.28 } as const;
  const X = Math.PI / 2;
  return (
    <group ref={g}>
      <mesh rotation={[X, 0, 0]}><cylinderGeometry args={[2, 2, 0.28, 96]} /><meshStandardMaterial {...steel} /></mesh>
      <mesh rotation={[X, 0, 0]}><cylinderGeometry args={[1, 1, 0.7, 64]} /><meshStandardMaterial {...steel} color="#8d9094" /></mesh>
      <mesh rotation={[X, 0, 0]}><cylinderGeometry args={[0.35, 0.35, 0.8, 48]} /><meshStandardMaterial color="#222" metalness={0.8} roughness={0.5} /></mesh>
      {Array.from({ length: 5 }).map((_, i) => { const a = (i / 5) * Math.PI * 2;
        return <mesh key={i} position={[Math.cos(a) * 0.65, 0.2, Math.sin(a) * 0.65]} rotation={[X, 0, 0]}><cylinderGeometry args={[0.09, 0.09, 0.82, 20]} /><meshStandardMaterial color="#111" metalness={0.6} roughness={0.6} /></mesh>; })}
      {Array.from({ length: 24 }).map((_, i) => { const a = (i / 24) * Math.PI * 2;
        return <mesh key={i} position={[Math.cos(a) * 1.55, 0, Math.sin(a) * 1.55]} rotation={[X, 0, 0]}><cylinderGeometry args={[0.07, 0.07, 0.3, 16]} /><meshStandardMaterial color="#0b0b0c" /></mesh>; })}
      <mesh rotation={[X, 0, 0]}><torusGeometry args={[2, 0.025, 12, 96]} /><meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} /></mesh>
    </group>
  );
}
export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.15} />
      <pointLight position={[3, 2, 3]} intensity={30} color="#f59e0b" />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 5, 2]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#ffb347" position={[-5, 0, 2]} scale={[2, 6, 1]} />
      </Environment>
      <Disc />
    </Canvas>
  );
}
