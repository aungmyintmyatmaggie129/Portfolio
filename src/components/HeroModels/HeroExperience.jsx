import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        <button
            className='btn-Capture'
            onClick={captureImage}
            style={{
                position: 'absolute',
                top: '200px',
                left: '20px',
                padding: '20px 30px',
                zIndex: 100,
            }}
        >
            Capture
        </button>
            {/* <Canvas ref={canvasRef} camera={{ position: [0, 0, 15], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />
                <HeroLights />
                <Center>
                    <group
                        scale={isMobile ? 0.5 : 1}
                        position={[0, -4.5, 1]}
                        rotation={[0, -Math.PI / 4, 0]}
                    >
                        <Room />
                    </group>
                </Center>
            </Canvas> */}

        </>
    )
}

export default HeroExperience