import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export const Bulb: FC<JSX.IntrinsicElements['mesh']> = props => {
	const ref = useRef<THREE.Mesh>(null)
	const { scene } = useThree()

	useEffect(() => {
		if (scene.userData.lights) scene.userData.lights.push(ref)
		else scene.userData.lights = [ref]
	}, [scene.userData])

	return (
		<mesh ref={ref} {...props}>
			<pointLight
				castShadow
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-radius={10}
			/>
			<sphereBufferGeometry args={[0.2]} />
			<meshPhongMaterial emissive={new THREE.Color('yellow')} />
		</mesh>
	)
}
