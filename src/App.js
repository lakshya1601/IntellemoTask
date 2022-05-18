// import logo from './logo.svg';
import './App.css';
import Canvas from './canvas/canvas';
import yoda from "./assets/images/yoda.jpg"
import { useRef, useState } from 'react';
import { Layer, Stage, Text } from 'react-konva';
import VideoCanvas from './video/VideoCanvas';

const App = () => {
 
  const [images, setImages] = useState([yoda]);
  const [videos,setVideos]=useState(['https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Physicsworks.ogv/Physicsworks.ogv.240p.vp9.webm'])
  const [text,toggleText]=useState(false)
  const [content,toggleContent]=useState(false)
  const handleChange=()=>{
    toggleContent(!content)
  }
  const handleClick=()=>{
    toggleText(!text)
  }
  return (
   <div>
      
     <span className='span'>{text&&"hello"}</span>

     
        <Stage
          width={500}
          height={500}
          style={{ border: '1px solid grey' }}
         
        >
          <Layer>
            {content?<>   
                {videos.map((video)=>{
              return <VideoCanvas src={video} />
            })}</>:
            <>
             {images.map((image) => {
              // debugger
              return <Canvas image={image} />;
            })} 
            </>
            }
       
            
     
          </Layer>

        </Stage>
        <button onClick={handleClick} style={{border:"none",background:"green" ,color:"white",padding:"1rem"}}>
          Add or remove Text
        </button>
        <button onClick={handleChange} style={{border:"none",background:"red" ,color:"white",padding:"1rem"}}>
          Change content
        </button>
        </div>
  );
};

export default App;
