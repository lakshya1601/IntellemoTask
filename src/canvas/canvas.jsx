import React from "react";
import {Image} from "react-konva"
import useImage from "use-image";



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