// Import necessary components and hooks from external libraries and files
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

// Define the main component for the Home page
const Home = () => {
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;
	// State to manage rotation of the island
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState();
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);

	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}

		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	// Function to adjust the scale, position, and rotation of the island based on screen size
	const adjustIslandForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, -6.5, -43];
		let rotation = [0.1, 4.7, 0];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		} else {
			screenScale = [1, 1, 1];
		}
		return [screenScale, screenPosition, rotation];
	};

	// Function to adjust the scale and position of the plane based on screen size
	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [0, -4, -4];
		}
		return [screenScale, screenPosition];
	};

	// Destructuring values returned from adjustment functions for island
	const [islandScale, islandPosition, islandRotation] =
		adjustIslandForScreenSize();

	// Destructuring values returned from adjustment functions for plane
	const [planeScale, planePosition] = adjustPlaneForScreenSize();

	// JSX for rendering the Home component
	return (
		<section
			className={`w-full h-screen relative ${
				isRotating ? "cursor-grabbing" : "cursor-grab"
			} `}
		>
			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center ">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			{/* Canvas component for the Three.js scene */}
			<Canvas
				className="w-full h-screen bg-transparent"
				camera={{ near: 0.5, far: 1000 }}
			>
				{/* Suspense component for handling loading state with a fallback loader */}
				<Suspense fallback={<Loader />}>
					{/* Lighting components for the scene */}
					<directionalLight position={[1, 1, 1]} intensity={2} />
					{/* light coming from source like sun */}
					<ambientLight intensity={0.5} />
					{/* use to illuminate all the objects in the scene */}
					{/* pointlight is like source of light from which light is coming in all direction */}
					{/* spotlight is a cone shape light use to focus in an object */}
					<hemisphereLight
						skyColor="#b1e1ff"
						groundColor="#000000"
						intensity={1}
					/>
					{/* use to give color to ground or floor and also to illuminate all the objects with diff color*/}

					{/* 3D models/components for the scene */}
					<Bird />
					<Sky isRotating={isRotating} />
					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>
					<Plane
						planeScale={planeScale}
						planePosition={planePosition}
						isRotating={isRotating}
						rotation={[0, 20, 0]}
					/>
				</Suspense>
			</Canvas>

			<div className="absolute bottom-2 left-2">
				<img
					src={!isPlayingMusic ? soundoff : soundon}
					alt="jukebox"
					onClick={() => setIsPlayingMusic(!isPlayingMusic)}
					className="w-10 h-10 cursor-pointer object-contain"
				/>
			</div>
		</section>
	);
};

// Export the Home component as the default export
export default Home;
