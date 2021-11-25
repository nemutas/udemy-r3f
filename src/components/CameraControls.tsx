import { FC } from 'react';
import { useFrame } from '@react-three/fiber';
import { state } from '../state';

export const CameraControls: FC = () => {
	useFrame(({ camera, scene }) => {
		if (!state.activeMesh || state.activeMesh.name !== state.activeMeshName) {
			state.activeMesh = scene.getObjectByName(state.activeMeshName)! as THREE.Mesh
		}

		if (state.shouldUpdate) {
			camera.position.lerp(state.cameraPos, 0.1)
			const sceneObj = scene as any
			sceneObj.orbitControls.target.lerp(state.target, 0.1)
			sceneObj.orbitControls.update()
			// enable orbitControls
			const diff = camera.position.clone().sub(state.cameraPos).length()
			if (diff < 0.1) state.shouldUpdate = false
		}
	})

	return null
}
