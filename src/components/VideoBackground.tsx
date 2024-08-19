import Link from 'next/link'

const VideoBackground = () => {
  return (
    <div className="">
    {/* Background Video */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      src="/bgVid-mobile-cut.mp4"
      className=""
    >
    </video>

    {/* Content on top of the video */}

    <h1 className=' text-white absolute z-30 flex items-center justify-center text-5xl md:text-6xl font-bold tracking-tighter leading-tight top-[18%] left-[27%]'>DJ Khaaliq</h1>

    <div className="absolute z-30 flex items-center justify-center top-[78%] left-[40%]">
      <Link href="/home">
        <h1 className="text-white text-3xl font-bold border border-white animate-pulse p-3">Enter</h1>
      </Link>
    </div>
  </div>
  )
}

export default VideoBackground
