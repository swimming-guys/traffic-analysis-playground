import './App.css';
import Car from './components/Car';
import { Stage, Layer, Text } from 'react-konva';
import Road from './components/Road';

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer id="klayer" >
        <Text text="Try click on rect" />
        <Road radius={.8} color="#AAAAAA" />
        <Road radius={.78} color="#444444" />
        <Road radius={.68} color="#AAAAAA" lane={true} />
        <Road radius={.58} color="#AAAAAA" />
        <Road radius={.56} color="green" />
        <Car radian={1.5} lane={1} />
        <Car radian={1} lane={1} />
        <Car radian={.75} lane={1} />
        <Car radian={.25} lane={1} />
        <Car radian={2} lane={1} />
        <Car radian={1.25} lane={1} />
        <Road radius={.001} color="purple" />
      </Layer>
    </Stage>
  );
}

export default App;
