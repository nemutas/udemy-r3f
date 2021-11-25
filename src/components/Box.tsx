import { FC, useEffect } from 'react';
import * as THREE from 'three';
import { useBox } from '@react-three/cannon';
import { ThreeEvent, useLoader } from '@react-three/fiber';
import { publicPath } from '../utils';

type BoxProps = {
	name: string
	position: [number, number, number]
}

export const Box: FC<BoxProps> = props => {
	const [ref, api] = useBox(() => ({ mass: 1, ...props }))
	const texture = useLoader(THREE.TextureLoader, publicPath('/assets/wood.jpg'))

	const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
		// console.log(e)
	}

	const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
		e.object.scale.set(1.5, 1.5, 1.5)
	}

	const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
		e.object.scale.set(1, 1, 1)
	}

	useEffect(() => {
		ref.current!.userData.api = api
	}, [api, ref])

	return (
		<mesh
			ref={ref}
			{...props}
			castShadow
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshPhysicalMaterial map={texture} />
		</mesh>
	)
}
