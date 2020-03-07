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
        image: null
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
    }

    render() {
        const wih = window.innerHeight
        return (
            <Image
                image={this.state.image}
                x={(window.innerWidth / 2) - (wih * .05)}
                y={( wih / 2) + (wih * .265)}
                height={wih * .1}
                width={wih * .1}
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
        <Layer >
          <Text text="Try click on rect" />
          <Road radius=".8" color="#AAAAAA" />
          <Road radius=".78" color="#444444" />
          <Road radius=".68" color="#AAAAAA" lane="true" />
          <Road radius=".58" color="#AAAAAA" />
          <Road radius=".56" color="green" />
          <Car />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));
