'use client'
import React, { useCallback } from 'react'
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




const getVideos = ():any => {
  const res = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqbqb795AZQ3Ulg7mvhAy3A&maxResults=15&key=MYAPIKEY`)
    .then((res)=>res.json())
    .then((data)=> {
      // console.log(data);
      
      return data
    })
}


type PropType = {
  options?: EmblaOptionsType
}

const VideoCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

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

  const videos = getVideos()
 
  

  return (
    <section className="embla my-[100px]">
        <h2>Bio</h2>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex-col h-[480px] overflow-scroll">
          {videos.items.map((video:any)=>{
            <div className="embla__slide" key={video.snippet.title}>
                <iframe src={`${video.id.videoId}`} ></iframe>
            </div>
          })
          }
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

