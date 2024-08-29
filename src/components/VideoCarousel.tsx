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
import Link from 'next/link'





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
  const [emblaRef, emblaApi] = useEmblaCarousel(options , [Autoplay( {delay: 4500})])

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
    <section className="embla">
      <Link href={`/media`}>
        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter leading-tight'>Media</h2>
      </Link>
      <div className="embla__viewport mt-5" ref={emblaRef}>
        <div className="embla__container mr-5">
          {slides.map((video:any)=>(
            <div className="embla__slide video" key={video.snippet.title}>
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} height={190} width={350} ></iframe>
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

