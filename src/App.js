import ReactPlayer from "react-player";
import "./App.css";
import Navbar from "./components/navbar";
import SpaceScene from "./components/space";
import Main from "./components/Main";
import Test from "./components/Test";
function App() {
  return (
    <div className="">
      <Main />
      {/* <Test /> */}
      {/* <Navbar /> */}
      {/* <TrianglePlayer videoSrc={videoSrc} /> */}
      {/* <div className="videoPlayer">
        <ReactPlayer
          className="TrianglePlayer"
          height={582}
          width={850}
          url={videoSrc}
        />
        {/* <PlayerTriangle /> */}
      {/* </div> */}
      {/* // <SpaceScene /> */}
    </div>
  );
}

export default App;
