import { useState } from 'react';
import './App.css';
// import Content from './demo/use-state/Counter';
// import Content from './demo/WindowResize';
// import Content from './demo/use-effect/ImagePicker';
// import Content from './demo/use-layout-effect/ReCount';
// import Content from './demo/use-ref/CountDown';
import Content from './demo/use-memo/add-product';


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
