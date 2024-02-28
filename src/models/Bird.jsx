// Import necessary React components and hooks for the Bird component
import React, { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Define the Bird component
const Bird = () => {
	// Load the GLTF model for the bird using the useGLTF hook
	const { scene, animations } = useGLTF(birdScene);
	const { actions } = useAnimations(animations, scene);

	const birdRef = useRef();

	useEffect(() => {
		actions["Take 001"].play();
		return () => {};
	}, []);

	useFrame(({ clock, camera }) => {
		//Update the Y position to simulate the flight moving in a sin wave

		birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

		if (birdRef.current.position.x > camera.position.x + 10) {
			birdRef.current.rotation.y = Math.PI;
		}else if(birdRef.current.position.x <camera.position.x -10){
      birdRef.current.rotation.y = 0;

    }

		if (birdRef.current.rotation.y === 0) {
			birdRef.current.position.x += 0.01;
			birdRef.current.position.z -= 0.01;
		} else {
			birdRef.current.position.x -= 0.01;
			birdRef.current.position.z += 0.01;
		}
	});

	// JSX for rendering the 3D model of the bird
	return (
		<mesh className="z-11" position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
			{/* Use the primitive component to render the loaded GLTF scene */}
			<primitive object={scene} />
		</mesh>
	);
};

// Export the Bird component as the default export
export default Bird;
