import { useControls } from 'leva';
import React, { FC, useEffect } from 'react';
import * as THREE from 'three';
import { useAnimations, useGLTF } from '@react-three/drei';

type ModelProps = {
	path: string
	position?: [number, number, number]
	scale: number
}

export const Model: FC<ModelProps> = props => {
	const { path, ...meshProps } = props
	const model = useGLTF(path)

	// animation
	const datas = useControls({ animetion: true })

	const { ref, names, actions } = useAnimations(model.animations)

	useEffect(() => {
		if (datas.animetion) {
			actions[names[0]]?.reset().fadeIn(0.5).play()
		} else {
			actions[names[0]]?.fadeOut(0.5)
		}
	}, [actions, names, datas])

	// add shadow
	model.scene.traverse(child => {
		if (child instanceof THREE.Mesh) {
			const mesh = child as THREE.Mesh
			mesh.castShadow = true
			mesh.receiveShadow = true
			;(mesh.material as THREE.Material).side = THREE.FrontSide
		}
	})

	return <primitive ref={ref} object={model.scene} {...meshProps} />
}
