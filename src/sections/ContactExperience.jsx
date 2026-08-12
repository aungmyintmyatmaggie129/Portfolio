'@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Computer } from '../components/HeroModels/Models/Computer-optimized'

const ContactExperience = () => {

    {/* This is download capture function that transform 3d model into png */ }
    const canvasRef = useRef();
    const captureImage = () => {
        const canvas = canvasRef.current;

        const link = document.createElement('a');
        link.download = 'hero-room.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <>
            <Canvas ref={canvasRef} camera={{ position: [0, 3, 7], fov: 45 }} gl={{ preserveDrawingBuffer: true }} shadows>
                <ambientLight intensity={0.6} color="#fff4e6" />
                <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
                <directionalLight position={[5, 9, 1]} intensity={2.5} color="#ffd9b3" castShadow />

                <spotLight
                    position={[-5, 5, 5]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />


                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />
                <group scale={0.03} position={[0, -1.5, -2]} castShadow>
                    <Computer />
                </group>
                <group scale={[1, 1, 1]}>
                    <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[30, 30]} />
                        <meshStandardMaterial color="#a46b2d" />
                    </mesh>
                </group>
            </Canvas>
        </>
    )
}

useGLTF.preload('/models/computer-optimized.glb')

export default ContactExperience
