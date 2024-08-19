import React from 'react'


async function getVideos(){
    const res = await fetch('http://localhost:3000/api/videos')
    const data = await res.json()
    return data
  }

const VideoGallery =  async () => {

    const YTDATA = await getVideos()
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 h-[700px] overflow-scroll'>
        {YTDATA.videos.items.map((video:any)=>(
            <div className="hover:animate-bounce mx-auto" key={video.snippet.title}>
            <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} height={190} width={350} ></iframe>
        </div>
        ))}
      
    </div>
  )
}

export default VideoGallery
