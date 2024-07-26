import React from 'react'
import ReactPlayer from 'react-player'
export const Videoplay = () => {
    const video = "https://sipcor.com.ar/wp-content/uploads/2024/05/video-portada-sipcor.mp4"
  return (
    <div className="flex justify-center items-center">
        <ReactPlayer url={video} width="700px" height="400px" controls={true} />
    </div>
  )
}
