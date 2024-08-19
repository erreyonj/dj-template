import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


async function getMixes(){
    try {
      const res = await fetch('https://api.mixcloud.com/search/?q=djkhaaliq&type=cloudcast')
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error);
    }
  }

const MixGallery = async () => {

const MIXDATA = await getMixes()    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 h-[930px] overflow-scroll'>
        {MIXDATA.data.map((mix:any)=>(
            <div key={mix.url} className='mx-auto p-5'>
                <Link href={mix.url} className=''>
                    <Image src={mix.pictures.large} alt='Mixcloud thumbnail' width={380} height={200} />
              </Link>
            </div>
        ))}
      
    </div>
  )
}

export default MixGallery
