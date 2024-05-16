import { Button } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { Canvas, useFrame } from "react-three-fiber";

function RotatingCube() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log("click")}
      onPointerOver={(e) => console.log("hover")}
      onPointerOut={(e) => console.log("unhover")}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <Button
          variant="contained"
          className="mt-4"
          onClick={() => navigate("/dashboard")}
        >
          Go Back To DashBoard
        </Button>
      </div>
      <Canvas
        style={{
          height: "800px",
          width: "800px",
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default PageNotFound;