import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { PublicApi } from '@react-three/cannon';
import { GroupProps, useThree } from '@react-three/fiber';

type DragableProps = {
	children: React.ReactNode
}

export const Dragable: FC<DragableProps> = ({ children }) => {
	const groupRef = useRef<GroupProps>(null)
	const { camera, gl, scene } = useThree()

	useEffect(() => {
		const objects = groupRef.current!.children! as THREE.Object3D<Event>[]
		const controls = new DragControls(objects, camera, gl.domElement)
		controls.transformGroup = true

		controls.addEventListener('dragstart', e => {
			// orbitControls disable
			const sceneObj = scene as any
			sceneObj.orbitControls.enabled = false
			// set mass 0
			const object = (e as any).object as THREE.Mesh
			const api = object.userData.api as PublicApi
			api && api.mass.set(0)
		})
		controls.addEventListener('dragend', e => {
			// orbitControls enable
			const sceneObj = scene as any
			sceneObj.orbitControls.enabled = true
			// set mass 1
			const object = (e as any).object as THREE.Mesh
			const api = object.userData.api as PublicApi
			api && api.mass.set(1)
		})
		controls.addEventListener('drag', e => {
			const object = (e as any).object as THREE.Mesh
			const api = object.userData.api as PublicApi
			if (api) {
				api.position.copy(object.position)
				api.velocity.set(0, 0, 0)
			}
		})
	}, [camera, gl.domElement, scene])

	return <group ref={groupRef}>{children}</group>
}
