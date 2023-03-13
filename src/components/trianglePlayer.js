import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import '../App.css'

const TrianglePlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="TrianglePlayer">
      <ReactPlayer
        ref={videoRef}
        src={videoSrc}
        loop
      />
    </div>
  );
};

export default TrianglePlayer;
