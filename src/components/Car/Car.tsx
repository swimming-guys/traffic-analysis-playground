import React from 'react';
import { Image } from 'react-konva';

export interface CarProps {
	lane: number
	radian: number
}

const centerY = window.innerHeight / 2;
const centerX = window.innerWidth / 2;

function getX(locationRadian: number, lane: number): number {
	return centerX + (lane * Math.cos(locationRadian));
}

function getY(locationRadian: number, lane: number): number {
	return centerY + (lane* Math.sin(locationRadian));
};

function getRotation(theta: number ): number {
	return theta * (180/Math.PI);
};

const Car: React.VFC<CarProps> = (props: CarProps) => {

	const [image, setImage] = React.useState<CanvasImageSource|undefined>(undefined);

	React.useEffect(() => {
		const imageFile = new window.Image();
		imageFile.src = "/car.png";
		imageFile.onload = () => {
				setImage(imageFile)
		};
	});

	// TODO Animate 'tween' car around circle
	/* var parent = _reactInternalInstance._currentElement._owner._instance;

	* var anim = new Konva.Animation(function(frame) {
	*     var dist = 50 * (frame.timeDiff / 1000);
	*     image.move({x: dist, y: 0});
	* }, parent);

	* anim.start(); */


	const carSize = centerY * .15;
	const lane1Radius = centerX * .487;
	const carCenter = carSize / 2;
	const lanes = [lane1Radius];
	const locationRadian = props.radian * Math.PI;
	const rotationRadian = locationRadian + 1.5 * Math.PI;

	return (
			<Image
					image={image}
					x={getX(locationRadian, lanes[props.lane - 1])}
					y={getY(locationRadian, lanes[props.lane - 1] )}
					height={carSize}
					width={carSize}
					rotation={getRotation(rotationRadian)}
					offsetX={carCenter}
					offsetY={carCenter}
			/>
	);
}

export default Car;