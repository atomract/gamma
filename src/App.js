import ReactPlayer from "react-player";
import "./App.css";
import Navbar from "./components/navbar";
import SpaceScene from "./components/space";
import TrianglePlayer from "./components/trianglePlayer";

function PlayerTriangle() {
  return (
    <div className="player-triangle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function App() {
  const videoSrc = "https://www.youtube.com/watch?v=2kTQZVzkXgI";

  return (
    <div className="App">
      <Navbar />
      {/* <TrianglePlayer videoSrc={videoSrc} /> */}
      <div className="videoPlayer">
        <ReactPlayer className="TrianglePlayer " url={videoSrc} />
        {/* <PlayerTriangle /> */}
      </div>
      <SpaceScene />
    </div>
  );
}

export default App;
