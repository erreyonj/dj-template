
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/EmblaCarouselButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { config } from "@/config";
import { error } from 'console'




// const getVideos = ():Promise<any> => {  
//   return fetch(`http://localhost:3000/api/videos`)
//     .then((res)=>res.json())
//     .then((data)=> {
//       // console.log(data.items);
      
//       return data.items
//     })
// }

async function getVideos(){
  const res = await fetch('http://localhost:3000/api/videos')
  const data = await res.json()
  // console.log(data);
  
  return data
}


type PropType = {
  options?: EmblaOptionsType
}

const VideoCarousel: React.FC<PropType> = async (props) => {
  const { options } = props
  // const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
//     const autoplay = false
//     emblaApi?.plugins()?.autoplay
//     if (!autoplay) return

//     const resetOrStop =
//       autoplay.options.stopOnInteraction === true
//         ? autoplay.reset
//         : autoplay.stop

//     resetOrStop()
//   }, [])

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi, onNavButtonClick)

  const YTDATA = await getVideos()
console.log(YTDATA);
  
  

 
  

  return (
    <section className="embla my-[100px]">
        <h2>Media</h2>
      <div className="embla__viewport" >
        <div className="embla__container flex-col h-[480px] overflow-scroll">
          {/* {videos.videos.items.map((video:any)=>{
            <div className="embla__slide" key={video.snippet.title}>
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe>
            </div>
          })
          } */}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
    </section>
  )
}

export default VideoCarousel

