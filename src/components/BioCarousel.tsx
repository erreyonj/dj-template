'use client'
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

type PropType = {
  options?: EmblaOptionsType
}

const BioCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = false
    // emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    // const resetOrStop =
    //   autoplay.options.stopOnInteraction === true
    //     ? autoplay.reset
    //     : autoplay.stop

    // resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla">
        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter leading-tight'>Bio</h2>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex-col">
          <div className="embla__slide w-full flex items-center mb-10 mt-3">
            <Image src={`/images/kevan-white.jpg`} alt='image' width={400} height={1}/>
          </div>
          <div className="embla__slide">
            <p className='m-1 h-52 overflow-scroll opacity-0 animate-fade [scale: 0.9] [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:100px]'>In Chicago, DJ KKHAALIQ is known as one of the most humble street jocks on the music seen. Born, Ke&apos;vin Phillips he started DJing in &apos;85 as a hobby. His greatest influence came in the person of the late Jam Master Jay (RIP). In 1990, KHAALIQ turned professional and started what is now known as KHAALIQ ENTERTAINMENT. He describes his style as, “Jesus speaking to the masses, in a slang language.” He has mastered the art of the LIVE show and views disc jockeying as a performance and not a service. Whereas some DJs sound great only on mix tapes and CDs, KHAALIQ scratches, blends, mixes, and excites the crowd, all LIVE. There are no special computers or pre-recorded sounds that he relies on. He depends solely on his passion, instinct, and a knack for the unexpected.
              <br />
              <br />
            </p>
          </div>
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

export default BioCarousel

