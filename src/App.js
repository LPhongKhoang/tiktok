import { useState } from 'react';
import './App.css';
// import Content from './demo/Counter';
// import Content from './demo/WindowResize';
import Content from './demo/ImagePicker';


function App() {
  const [isShow, setShow] = useState(false);

  const handleClickToggle = () => {
    setShow(prev => !prev);
  }
  

  return (
    <div className="App">
      <button onClick={handleClickToggle}>Toggle</button>
      {
        isShow ? <Content /> : null
      }
    </div>
  );
}

export default App;
