// import User from './components/main';
// import {useState } from 'react';
// import AddCounter from './components/addCounter';
import './App.css';
import User from './components/counter-item/inputRef';

function App() {

  // const [isDisplay, setIsdisplay] = useState(false)
  // const deleteDisplayHandler = () => {
  //   setIsdisplay(true)
  // }
  // useEffect(() => {
  //   document.title = `counter: ${counter}`
  // }, [])


  return (
    <div className="App">
      <User />
      <>
        {/* <button onClick={deleteDisplayHandler} className='btn btn-outline-success'>
          isDisplay
        </button> */}
        {/* {isDisplay &&
          <User firstName='Hasanjon' lastName='Abdulazizov' link='https://github.com/Hasanjon1224' />
        } */}
      </>
      {/* <User firstName='Yusufjon' lastName='Homidov' link='https://github.com/Hasanjon1224' /> */}
    </div>
  );
}

export default App;
