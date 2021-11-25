import React, { FC } from 'react';
import { Bulb } from './Bulb';

export const Lights: FC = () => {
	return (
		<>
			<ambientLight intensity={0.2} />
			<directionalLight
				position={[6, 3, 0]}
				intensity={2}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-radius={10}
				castShadow
			/>
			<Bulb position={[-6, 3, 0]} />
			<Bulb position={[0, 3, 0]} />
			<Bulb position={[6, 3, 0]} />
		</>
	)
}
