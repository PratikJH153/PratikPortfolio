import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Decal, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0} rotationIntensity={0} floatIntensity={0}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={0.5} />
      <directionalLight position={[-1, -1, -1]} intensity={0.25} />
      <mesh castShadow receiveShadow scale={2.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhongMaterial
          color="#fff8eb"
          shininess={100}
          specular="#ffffff"
          flatShading={false}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, skillName }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <Ball imgUrl={icon} />
        </Suspense>
      </Canvas>
      {showTooltip && <span className="tooltip">{skillName}</span>}
    </div>
  );
};

export default BallCanvas;
