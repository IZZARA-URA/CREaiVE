"use client"
import React from 'react'
import { useRef } from 'react';
import {
    Canvas
} from '@react-three/fiber'
import {
    useGLTF,
    OrbitControls,
    Line

} from '@react-three/drei'
import * as THREE from 'three';
import { PointLight } from 'three';

const Holovue = () => {

    const holuvue_ = useGLTF('/holovue/Holovue.gltf')
    const lightRef = useRef<PointLight>(null);

    return (
        <div className='relative z-0 h-[60vh] overflow-visible border-[1px] rounded-[20px]'>
            <Canvas

                className='overflow-visible rounded-[20px]'>
                <OrbitControls
                    enableRotate
                    autoRotate
                    onChange={(e) => {
                        if (!e) return;
                        const camera = e.target.object;

                        if (lightRef.current) {
                            lightRef.current.position.set(0, 1, 0);
                            lightRef.current.position.add(camera.position);
                        }
                    }} />
                <ambientLight intensity={1} />

                {/* <directionalLight intensity={4}
                    position={[0, 0, -20]}
                /> */}

                {/* <pointLight
                    color={0xffffff}
                    intensity={1}
                    position={[1, 1, 0]}
                /> */}

                {/* <Line
                    points={[[-100, 0, 0], [100, 0, 0]]}
                    color={"red"}
                />
                <Line
                    points={[[0, -100, 0], [0, 100, 0]]}
                    color={"green"}
                />
                <Line
                    points={[[0, 0, -100], [0, 0, 100]]}
                    color={"blue"}
                /> */}

                <pointLight
                    ref={lightRef}
                    intensity={10}
                    position={[2, 2, 0]}
                />


                <mesh>
                    <primitive
                        scale={0.25}
                        object={holuvue_.scene}
                        position={new THREE.Vector3(
                            0, -2.5, 0
                        )}
                    />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Holovue