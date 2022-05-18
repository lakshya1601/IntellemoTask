// import logo from './logo.svg';
import './App.css';
import Canvas from './canvas/canvas';
import yoda from "./assets/images/yoda.jpg"
import { useState } from 'react';
import { Layer, Stage } from 'react-konva';
import VideoCanvas from './video/VideoCanvas';

const App = () => {
  const video="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Physicsworks.ogv/Physicsworks.ogv.240p.vp9.webm"
  const [text,toggleText]=useState(false)
  const [content,toggleContent]=useState(false)
  const [videoState,changeVideoState]=useState("")
  const handleChange=()=>{
    toggleContent(!content)
  }
  const handleClick=()=>{
    toggleText(!text)
  }
  const handlePause=()=>{
    changeVideoState("pause")
  }
  const handlePlay=()=>{
    changeVideoState("play")
  }
  return (
   <div style={{textAlign:"center"}}>
      
     <span className='span'>{text&& !content &&"hello"}</span>
     {content&&(
       <>
       <button onClick={handlePlay}>
     Play
    </button>
    <button onClick={handlePause}>
      Pause
    </button>
       </>
     
     )}

        <Stage
          width={500}
          height={500}
          style={{ border: '1px solid grey',display:"flex",justifyContent:"center" }}
        >
          <Layer>
            {content?<>   
                <VideoCanvas src={video} state={videoState} />
            </>:
            <>
            <Canvas image={yoda} />
            </>
            }
          </Layer>

        </Stage>
        
        <div className='buttonContainer'>
          {!content&&(
            <button onClick={handleClick} style={{border:"none",background:"green" ,color:"white",padding:"1rem"}}>
          Add or remove Text
        </button>
          )}
        
        <button onClick={handleChange} style={{border:"none",background:"red" ,color:"white",padding:"1rem"}}>
          Change content
        </button>
        </div>
       
        </div>
  );
};

export default App;
