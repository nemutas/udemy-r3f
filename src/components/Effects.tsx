import React, { FC, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { DepthOfField, EffectComposer, GodRays } from '@react-three/postprocessing';

export const Effects: FC = () => {
	const [lights, setLights] = useState<
		React.RefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>[] | null
	>(null)

	const { scene } = useThree()

	useEffect(() => {
		if (scene.userData.lights && scene.userData.lights.length === 3) {
			// console.log(scene.userData)
			setLights(scene.userData.lights)
		}
	}, [scene.userData.lights])

	return lights ? (
		<EffectComposer>
			<DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
			<>
				{lights.map(light => (
					<GodRays key={light.current!.uuid} sun={light.current!} />
				))}
			</>
		</EffectComposer>
	) : null
}
