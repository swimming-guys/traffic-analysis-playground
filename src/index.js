import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Circle, Text, Image } from 'react-konva';
import Konva from 'konva';

class Road extends React.Component {
    /* state = {
     *   color: 'green'
     * };
     * handleClick = () => {
     *   this.setState({
     *     color: Konva.Util.getRandomColor()
     *   });
     * }; */
    render() {

      const fillValue = this.props.lane ? null : this.props.color
      const strokeValue = this.props.lane ? "white" : null

      return (
            <Circle
                x={window.innerWidth / 2}
                y={window.innerHeight / 2}
                width={window.innerWidth * this.props.radius}
                height={window.innerHeight * this.props.radius}
                fill={fillValue}
                shadowBlur={5}
                onClick={this.handleClick}
                dash={[5,10]}
                stroke={strokeValue}
            />
    );
  }
}

class Car extends React.Component {

    state = {
        image: null,
    };

    componentDidMount() {
        const image = new window.Image();
        //http://www.iconarchive.com/show/transporter-icons-by-icons-land/Car-Top-Red-icon.html
        image.src = "/car.png";
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };


        // TODO Animate 'tween' car around circle
        /* var parent = this._reactInternalInstance._currentElement._owner._instance;

         * var anim = new Konva.Animation(function(frame) {
         *     var dist = 50 * (frame.timeDiff / 1000);
         *     this.image.move({x: dist, y: 0});
         * }, parent);

         * anim.start(); */
    }

    centerY = window.innerHeight / 2
    centerX = window.innerWidth / 2
    carSize = this.centerY * .15
    lane1Radius = this.centerX * .487
    carCenter = this.carSize / 2
    lanes = [this.lane1Radius]

    getX(locationRadian) {
        return this.centerX + (this.lanes[this.props.lane - 1] * Math.cos(locationRadian));
    }

    getY(locationRadian) {
        return this.centerY + (this.lanes[this.props.lane - 1] * Math.sin(locationRadian));
    }


    getRotation(theta) {
        return theta * (180/Math.PI);
    }

    render() {
        this.locationRadian = this.props.radian * Math.PI
        this.rotationRadian = this.locationRadian + 1.5 * Math.PI

        return (
            <Image
                image={this.state.image}
                x={this.getX(this.locationRadian)}
                y={this.getY(this.locationRadian)}
                height={this.carSize}
                width={this.carSize}
                rotation={this.getRotation(this.rotationRadian)}
                offsetX={this.carCenter}
                offsetY={this.carCenter}
            />
        );
    }

}

class App extends Component {


  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer id="klayer" >
          <Text text="Try click on rect" />
          <Road radius=".8" color="#AAAAAA" />
          <Road radius=".78" color="#444444" />
          <Road radius=".68" color="#AAAAAA" lane="true" />
          <Road radius=".58" color="#AAAAAA" />
          <Road radius=".56" color="green" />
          <Car radian="1.5" lane="1" />
          <Car radian="1" lane="1" />
          <Car radian=".75" lane="1" />
          <Car radian=".25" lane="1" />
          <Car radian="2" lane="1" />
          <Car radian="1.25" lane="1" />
          <Road radius=".001" color="purple" />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));
