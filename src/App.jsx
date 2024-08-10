import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";

function Scene() {
  const gltf = useGLTF("/src/assets/scene.gltf");
  return (
    <>
      <ambientLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} scale={0.1} />;
    </>
  );
}

const App = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default App;
