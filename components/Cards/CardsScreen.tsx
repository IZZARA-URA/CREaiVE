"use client"

import { CardProps } from '@/types'
import React from 'react'
import { useRef, useState } from 'react';
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

const VibrantPrimaryFill_CardCol_1 = {
    upper: 'absolute w-full h-full bg-grayDefaultDark-500 rounded-[20px] pl-10 pr-2 py-2 bg-opacity-50 text-white',
    lower: 'relative w-full h-full bg-grayDefaultDark-500 rounded-[20px] '
}


const CardScreen: React.FC<CardProps> = (
    {
        children,
        type,
        topic,
        tagline,
        body,
        ...props
    }
) => {

    const [cardType, setCardType] = useState(VibrantPrimaryFill_CardCol_1)

    const holuvue_ = useGLTF('../holovue/Holovue.gltf')
    const lightRef = useRef<PointLight>(null);

    return (
        <div className={cardType.lower}>
            <div className={cardType.upper}>
                <div className='flex h-full'>
                    <div className='grid grid-cols-3 w-full gap-4'>
                        <div className='flex items-center justify-center w-full h-full rounded-[20px] col-span-2'>
                            <div className='pb-8'>
                                <div className='font-proTextHeavy text-4xl pt-6 font-bold uppercase w-full text-center '>
                                    {topic}
                                </div>
                                <div className='pt-2 px-2 text-justify '>
                                    Holographicbox is a cutting-edge display solution that revolutionizes visual
                                    presentation with its stunning 86-inch transparent screen and advanced holographic technology.
                                    Designed to captivate and engage audiences, the Holographicbox creates immersive 3D visuals that
                                    appear to float in mid-air, offering a unique and memorable viewing experience. Ideal for advertising,
                                    exhibitions, and interactive displays, it combines high-resolution imagery with interactive capabilities,
                                    enabling brands to showcase their products and messages in a futuristic and impactful way.
                                    The sleek design and versatile functionality of the Holographicbox make it an essential tool for any
                                    business looking to stand out and leave a lasting impression on their audience.
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-full rounded-[20px] bg-white '>
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

                                <pointLight
                                    ref={lightRef}
                                    intensity={20}
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
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardScreen