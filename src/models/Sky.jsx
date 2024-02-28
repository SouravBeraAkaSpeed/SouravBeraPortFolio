// Import necessary components and hooks for the Sky component
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Define the Sky component
const Sky = ({isRotating}) => {
    // Load the GLTF model for the sky using the useGLTF hook
    const sky = useGLTF(skyScene)
    const skyRef=useRef()

    useFrame((_,delta)=>{
      if(isRotating){
        skyRef.current.rotation.y+=0.15*delta
      }
    })

    // JSX for rendering the 3D model of the sky
    return (
        <mesh ref={skyRef}>
            {/* Use the primitive component to render the loaded GLTF scene */}
            <primitive object={sky.scene}/>
        </mesh>
    )
}

// Export the Sky component as the default export
export default Sky;
