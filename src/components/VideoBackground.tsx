

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Background Video */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      src="../public/dj-khaaliq-live.mp4"
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/dj-khaaliq-live.mp4" type="video/mp4" />
    </video>

    {/* Content on top of the video */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-white text-4xl font-bold">DJ KHAALIQ</h1>
    </div>
  </div>
  )
}

export default VideoBackground
