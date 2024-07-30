import React from 'react'
import ReactPlayer from 'react-player'
export const Videoplay = () => {
    const video = "https://sipcor.com.ar/wp-content/uploads/2024/05/video-portada-sipcor.mp4"
  return (
    <div className="flex justify-center items-center sm:w-[350px] sm:h-[280px] md:w-[655px] md:h-[610px] 
    lg:w-[700px] lg:h-[400px]">
        <ReactPlayer url={video} width="700px" height="400px" controls={true} />
    </div>
  )
}
