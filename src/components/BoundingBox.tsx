import React, { FC, useEffect } from 'react';
import { useBox } from '@react-three/cannon';

type BoundingBoxProps = {
	children: React.ReactNode
	position?: [number, number, number]
	offset?: [number, number, number]
	dimensions?: [number, number, number]
	visible?: boolean
}

export const BoundingBox: FC<BoundingBoxProps> = props => {
	const {
		children,
		position = [0, 0, 0],
		offset = [0, 0, 0],
		dimensions = [1, 1, 1],
		visible = false
	} = props

	const [ref, api] = useBox(() => ({ mass: 1, args: dimensions, position }))

	useEffect(() => {
		ref.current!.userData.api = api
	}, [api, ref])

	return (
		<group ref={ref}>
			<mesh scale={dimensions} visible={visible}>
				<boxBufferGeometry />
				<meshPhysicalMaterial wireframe />
			</mesh>
			<group position={offset}>{children}</group>
		</group>
	)
}
