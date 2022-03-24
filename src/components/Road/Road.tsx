import React from 'react';
import { Circle } from 'react-konva';

export interface RoadProps { 
	lane?: boolean
	radius: number
	color: string
}

const Road: React.VFC<RoadProps> = (props: RoadProps) => {

	const fillValue = props.lane ? undefined : props.color
	const strokeValue = props.lane ? "white" : undefined

	return (
		<Circle
			x={window.innerWidth / 2}
			y={window.innerHeight / 2}
			width={window.innerWidth * props.radius}
			height={window.innerHeight * props.radius}
			fill={fillValue}
			shadowBlur={5}
			dash={[5, 10]}
			stroke={strokeValue}
		/>
	);
};

export default Road;
