import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import sceneGLTF from "./assets/scene.gltf";

function Scene() {
  const gltf = useGLTF(sceneGLTF);
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
      <Suspense>
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default App;
