import React, { FC, Suspense } from 'react';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Background } from './components/Background';
import { CameraControls } from './components/CameraControls';
import { Cars } from './components/Cars';
import { Controller } from './components/Controller';
import { Effects } from './components/Effects';
import { Floor } from './components/Floor';
import { Lights } from './components/Lights';

export const App: FC = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Canvas style={{ backgroundColor: 'black' }} camera={{ position: [7, 7, 7] }} shadows>
				{/* <fog attach="fog" args={['white', 1, 10]} /> */}
				{/* controls */}
				<OrbitControls attach="orbitControls" />
				<CameraControls />
				<Controller />
				{/* lights */}
				<Lights />
				{/* helpers */}
				<axesHelper args={[5]} />
				{/* background */}
				<Suspense fallback={null}>
					<Background />
				</Suspense>
				{/* objects */}
				<Physics>
					<Cars />
					<Floor position={[0, -0.5, 0]} />
				</Physics>
				{/* postprocessing */}
				<Effects />
			</Canvas>
		</div>
	)
}
