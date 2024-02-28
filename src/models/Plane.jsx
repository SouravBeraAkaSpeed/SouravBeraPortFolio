// Import necessary React components and hooks for the Plane component
import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

// Define the Plane component
const Plane = ({ isRotating, ...props }) => {
	// Load the GLTF model for the plane using the useGLTF hook
	const ref = useRef();
	const { scene, animations } = useGLTF(planeScene);
	const { actions } = useAnimations(animations, ref);

	useEffect(() => {
		if (isRotating) {
			actions["Take 001"].play();
		} else {
			actions["Take 001"].stop();
		}
	}, [actions, isRotating]);

	// JSX for rendering the 3D model of the plane
	return (
		<mesh {...props} ref={ref}>
			{/* Use the primitive component to render the loaded GLTF scene */}
			<primitive object={scene} />
		</mesh>
	);
};

// Export the Plane component as the default export
export default Plane;
