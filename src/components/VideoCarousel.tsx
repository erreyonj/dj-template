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
import { error } from 'console'




// const getVideos = ():Promise<any> => {  
//   return fetch(`http://localhost:3000/api/videos`)
//     .then((res)=>res.json())
//     .then((data)=> {
//       // console.log(data.items);
      
//       return data.items
//     })
// }


type PropType = {
  slides: []
  options?: EmblaOptionsType
}

const VideoCarousel: React.FC<PropType> = (props) => {
  const { slides , options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options , [Autoplay( {delay: 3000})])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  
  
  return (
    <section className="embla my-[100px]">
        <h2>Media</h2>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-[480px]">
          {slides.map((video:any)=>(
            <div className="embla__slide" key={video.snippet.title}>
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} height={300} width={340} ></iframe>
            </div>
          ))
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

