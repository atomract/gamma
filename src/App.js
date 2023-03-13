import ReactPlayer from 'react-player';
import './App.css';
import Navbar from './components/navbar';
import SpaceScene from './components/space';
import TrianglePlayer from './components/trianglePlayer';

function App() {
  
  const videoSrc = 'https://www.youtube.com/watch?v=2kTQZVzkXgI';

  return (


    <div className="App">
      <Navbar/>
      {/* <TrianglePlayer videoSrc={videoSrc} /> */}
      <div className="videoPlayer">
        <ReactPlayer className='TrianglePlayer ' url={videoSrc} />
      </div>
      <SpaceScene/>

    </div>
  );
}

export default App;
