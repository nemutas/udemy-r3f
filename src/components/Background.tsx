import { FC, useMemo } from 'react';
import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';

export const Background: FC = () => {
	const texture = useLoader(THREE.TextureLoader, '/assets/autoshop.jpg')
	const { gl, scene } = useThree()

	const formatted = useMemo(
		() =>
			new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture),
		[gl, texture]
	)
	scene.background = formatted.texture

	return null
}
