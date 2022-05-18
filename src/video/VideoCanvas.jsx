import Konva from 'konva';
import React, { useMemo, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Image } from 'react-konva';

const VideoCanvas = ({ src,state }) => {

    const imageRef = useRef(null);
    const [size, setSize] = useState({ width: 50, height: 50 });
  
    
    const videoElement = useMemo(() => {
      const element = document.createElement("video");
      element.src = src;
      return element;
    }, [src]);
  
  
    useEffect(() => {
      const onload = function() {
        setSize({
          width: videoElement.videoWidth,
          height: videoElement.videoHeight
        });
      };
      videoElement.addEventListener("loadedmetadata", onload);
      return () => {
        videoElement.removeEventListener("loadedmetadata", onload);
      };
    }, [videoElement]);
  

  
    useEffect(() => {
      if(state==="play"){
        videoElement.play();
        const layer = imageRef.current.getLayer();
    
        const anim = new Konva.Animation(() => {}, layer);
        anim.start();
      }
    
  
      if(state==="pause"){
  
        videoElement.pause()
      }
      return () => {
       
        videoElement.pause()
      };
    }, [videoElement,state]);
  
    return (
      <Image
        ref={imageRef}
        image={videoElement}
        x={80}
        y={80}
        stroke="grey"
        width={size.width}
        height={size.height}
        // draggable
      />
    );
  };
  export default VideoCanvas