import { button, useControls } from 'leva';
import { FC, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { setState, state } from '../state';

export const Controller: FC = () => {
	const { scene } = useThree()

	const [datas, set] = useControls(() => ({
		color: '#fff',
		car1: button(() => updateState(1)),
		car2: button(() => updateState(2))
	}))

	const updateState = (carNum: 1 | 2) => {
		setState(carNum)
		const material = getActiveMeshMaterial()
		set({ color: `#${material.color.getHexString()}` })
	}

	const getActiveMeshMaterial = useCallback(() => {
		const activeMesh = scene.getObjectByName(state.activeMeshName) as THREE.Mesh
		const material = activeMesh.material as THREE.MeshStandardMaterial
		return material
	}, [scene])

	useEffect(() => {
		if (state.activeMesh) {
			const material = getActiveMeshMaterial()
			material.color.set(datas.color)
		}
	}, [datas, getActiveMeshMaterial])

	return null
}
