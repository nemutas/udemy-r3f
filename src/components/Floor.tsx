import { FC } from 'react';
import { useBox } from '@react-three/cannon';

type FloorProps = {
	position: [number, number, number]
}

export const Floor: FC<FloorProps> = props => {
	const [ref] = useBox(() => ({ args: [200, 1, 200], ...props }))

	return (
		<mesh ref={ref} {...props} receiveShadow>
			<boxBufferGeometry args={[200, 1, 200]} />
			<meshPhysicalMaterial transparent opacity={0.2} />
		</mesh>
	)
}
