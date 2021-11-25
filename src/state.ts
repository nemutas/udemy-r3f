import * as THREE from 'three';

type Sets = {
	[key: number]: {
		cameraPos: [number, number, number]
		target: [number, number, number]
		name: string
	}
}

const sets: Sets = {
	1: {
		cameraPos: [9, 2, 4],
		target: [4, 0, 0],
		name: 'Capot001_CAR_PAINT_0'
	},
	2: {
		cameraPos: [1, 2, 5],
		target: [-4, 0, 0],
		name: 'object005_bod_0'
	}
}

type State = {
	activeMesh: THREE.Mesh | null
	activeMeshName: string
	cameraPos: THREE.Vector3
	target: THREE.Vector3
	shouldUpdate: boolean
}

export const state: State = {
	activeMesh: null,
	activeMeshName: sets[1].name,
	cameraPos: new THREE.Vector3(...sets[1].cameraPos),
	target: new THREE.Vector3(...sets[1].target),
	shouldUpdate: true
}

export const setState = (carNum: 1 | 2) => {
	const set = sets[carNum]
	state.cameraPos.set(...set.cameraPos)
	state.target.set(...set.target)
	state.activeMeshName = set.name
	state.shouldUpdate = true
}
