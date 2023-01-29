import { useState } from 'react';
import './App.css';
// import Content from './demo/use-state/Counter';
// import Content from './demo/WindowResize';
// import Content from './demo/use-effect/ImagePicker';
// import Content from './demo/use-layout-effect/ReCount';
// import Content from './demo/use-ref/CountDown';
// import Content from './demo/use-memo/add-product';
// import Content from './demo/use-reducer/Volume';
import Content from './demo/use-reducer/TaskToday';


function App() {
  const [isShow, setShow] = useState(false);

  const handleClickToggle = () => {
    setShow(prev => !prev);
  }
  

  return (
    <div className="App">
      <div style={{margin: '100px 0'}}>
        <button onClick={handleClickToggle}>Toggle</button>
      </div>
      {
        isShow ? <Content /> : null
      }
    </div>
  );
}

export default App;
