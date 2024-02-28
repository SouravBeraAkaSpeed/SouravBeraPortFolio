// Import necessary React components and hooks for the Island component
import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import { a } from "@react-spring/three";

// Define the Island component
const Island = ({ isRotating, setIsRotating,setCurrentStage, ...props }) => {
	// Create a reference for the island object in the scene
	const islandRef = useRef();

	// Load the GLTF model for the island using the useGLTF hook
	const { nodes, materials } = useGLTF(islandScene);

	// Access the WebGL rendering context and viewport information using the useThree hook
	const { gl, viewport } = useThree();

	// Create a reference for the last x-coordinate used in pointer events
	const lastx = useRef(0);

	// Create a reference for the current rotation speed
	const rotationSpeed = useRef(0);

	// Define a damping factor for slowing down rotation speed
	const dampingFactor = 0.95;

	// State to track the current stage based on island orientation
	

	// Event handler for pointer down event
	const handlePointerDown = (e) => {
		e.stopPropagation(); // Prevent other elements from handling this event
		e.preventDefault();

		// Set isRotating to true to enable rotation
		setIsRotating(true);

		// Get the initial x-coordinate of the pointer
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		lastx.current = clientX;
	};

	// Event handler for pointer up event
	const handlePointerUp = (e) => {
		e.stopPropagation(); // Prevent other elements from handling this event
		e.preventDefault();

		// Set isRotating to false to stop rotation
		setIsRotating(false);
	};

	// Event handler for pointer move event
	const handlePointerMove = (e) => {
		e.stopPropagation(); // Prevent other elements from handling this event
		e.preventDefault();

		// Check if rotation is enabled
		if (isRotating) {
			// Get the current x-coordinate of the pointer
			const clientX = e.touches ? e.touches[0].clientX : e.clientX;

			// Calculate the change in x-coordinate and update the rotation
			const delta = (clientX - lastx.current) / viewport.width;
			islandRef.current.rotation.y += delta * 0.01 * Math.PI;

			// Update the last x-coordinate and rotation speed
			lastx.current = clientX;
			rotationSpeed.current = delta * 0.01 * Math.PI;
		}
	};

	// Event handler for key down event
	const handleKeyDown = (e) => {
		if (e.key === "ArrowLeft") {
			// Rotate the island to the left if the left arrow key is pressed
			if (!isRotating) setIsRotating(true);
			islandRef.current.rotation.y += 0.01 * Math.PI;
		} else if (e.key === "ArrowRight") {
			// Rotate the island to the right if the right arrow key is pressed
			if (!isRotating) setIsRotating(true);
			islandRef.current.rotation.y -= 0.01 * Math.PI;
		}
	};

	// Event handler for key up event
	const handleKeyUp = (e) => {
		if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
			// Set isRotating to false when arrow keys are released
			setIsRotating(false);
		}
	};

	// Update function called on each frame using useFrame hook
	useFrame(() => {
		if (!isRotating) {
			// Damping: Reduce rotation speed over time if not actively rotating
			rotationSpeed.current *= dampingFactor;

			// Set rotation speed to zero if it falls below a threshold
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0;
			}

			islandRef.current.rotation.y += rotationSpeed.current;
		} else {
			// If actively rotating, calculate normalized rotation to determine the current stage
			const rotation = islandRef.current.rotation.y;

			/**
			 * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
			 * The goal is to ensure that the rotation value remains within a specific range to
			 * prevent potential issues with very large or negative rotation values.
			 *  Here's a step-by-step explanation of what this code does:
			 *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
			 *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
			 *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
			 *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
			 *     This is done to ensure that the value remains positive and within the range of
			 *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
			 *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
			 *     modulo operation to the value obtained in step 2. This step guarantees that the value
			 *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
			 *     circle in radians.
			 */
			const normalizedRotation =
				((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			// Set the current stage based on the island's orientation
			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					setCurrentStage(4);
					break;
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					setCurrentStage(3);
					break;
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					setCurrentStage(2);
					break;
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					setCurrentStage(1);
					break;
				default:
					setCurrentStage(null);
			}
		}
	});

	// Effect hook for adding and removing event listeners
	useEffect(() => {
		const canvas = gl.domElement;
		canvas.addEventListener("pointerdown", handlePointerDown);
		canvas.addEventListener("pointerup", handlePointerUp);
		canvas.addEventListener("pointermove", handlePointerMove);
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		// Cleanup function to remove event listeners when component is unmounted
		return () => {
			canvas.removeEventListener("pointerdown", handlePointerDown);
			canvas.removeEventListener("pointerup", handlePointerUp);
			canvas.removeEventListener("pointermove", handlePointerMove);
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

	// JSX for rendering the 3D model of the island
	return (
		<a.group {...props} ref={islandRef}>
			<mesh
				geometry={nodes.polySurface944_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface945_tree1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface946_tree2_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface947_tree1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface948_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface949_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.pCube11_rocks1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
		</a.group>
	);
};

// Export the Island component as the default export
export default Island;
