import { useState } from 'react';
import './App.css';
import SecondComponent from './SecondComponent.tsx';
import FirstComponent from './FirstComponent.tsx';
import MainScrollableArea from './MainScrollableArea.tsx';



const getPosition = (val) => 150 - val / 2

function App() {

  const [position, setPosition] = useState(150)

  const onScroll = (e) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated)
  }

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <p>Learning Children as prop pattern for Optimization</p>
      <p><b>In this example we are first creating an issue - i.e not following the render prop pattern</b></p>
      <p>The issue is when i scroll, all child components are re-rendered that too very slow.</p>
      <p>Notice how slow Movable object moves on scroll !!!</p>
      <MainScrollableArea position={position}/>
      <FirstComponent />
      <SecondComponent />
    </div>
  )
}

export default App;
