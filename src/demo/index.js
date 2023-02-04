import { useState } from 'react';
import Content from './use-reducer/TaskToday';


function Demo() {
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

export default Demo;
