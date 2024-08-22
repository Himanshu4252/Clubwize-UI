import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import image from '../../../../../public/img/image.png'

interface Props{
    imgWidth?: string;
    imgHeight?: string;
    imgSrc?: string | StaticImageData;
 
}

const ImageCircle = ({imgWidth ,imgHeight, imgSrc=image}: Props) => {

    const imageWidth = imgWidth ? imgWidth : "20";
    const imageHeight = imgHeight ? imgHeight : "20";

  return (
    // <div className={` bg-white rounded-full w-[${imageWidth}] h-[${imageHeight}] shadow-2xl`}>
    <div>
        {/* <div className="rounded-full bg-slate-400 w-20 h-20 border-4 border-white shadow-2xl"> */}
        <div className={`rounded-full  bg-slate-400 w-${imageWidth} h-${imageWidth} border-4 border-white shadow-2xl`}>

        </div>
            {/* <Image className={`w-15 h-15 object-cover rounded-full border-4 border-white shadow-2xl`} src={imgSrc} alt="image"/> */}
    {/* </div> */}
    </div>
    )
}

export default ImageCircle