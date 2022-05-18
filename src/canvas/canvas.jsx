import React, { useEffect } from "react";
import {Image, Layer, Text} from "react-konva"
import useImage from "use-image";
// import imageUrl from "../assets/images/yoda.jpg"
import styles from "./canvas.module.css"
let url ='https://konvajs.github.io/assets/yoda.jpg'

const Canvas = ({ image }) => {
    const [img] = useImage(image);
    return (
        <>
        {/* <div>hello</div> */}
     
      <Image
    
      width={500}
      height={500}
        image={img}
  
      />
      </>
    );
  };
export default Canvas