import React, { FC, Suspense } from 'react';
import { BoundingBox } from './BoundingBox';
import { Dragable } from './Dragable';
import { Model } from './Model';

export const Cars: FC = () => {
	return (
		<Suspense fallback={null}>
			<Dragable>
				<BoundingBox visible position={[4, 2, 0]} dimensions={[3, 2, 6]} offset={[0, -0.4, 0.8]}>
					<Model path="/models/tesla_model_3/scene.gltf" scale={0.01} />
				</BoundingBox>
			</Dragable>
			<Dragable>
				<BoundingBox visible position={[-4, 2, 0]} dimensions={[3, 2, 7]} offset={[0, -0.8, 0.2]}>
					<Model path="/models/tesla_model_s/scene.gltf" scale={0.013} />
				</BoundingBox>
			</Dragable>
			<group rotation={[0, Math.PI / 2, 0]}>
				<Model path="/models/veribot/scene.gltf" scale={1} />
			</group>
		</Suspense>
	)
}
