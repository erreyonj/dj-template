import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import MixCarousel from '@/components/MixCarousel'
import BioCarousel from '@/components/BioCarousel'
import VideoCarousel from "@/components/VideoCarousel";
import Contact from "@/components/Contact";
import { EmblaOptionsType } from 'embla-carousel'
import '../../css/embla.css'
import { error } from "console";


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const BIOOPTIONS: EmblaOptionsType = { dragFree: true, loop: false }
const VIDEOOPTIONS: EmblaOptionsType = { dragFree: true, loop: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 


async function getVideos(){
  const res = await fetch('http://localhost:3000/api/videos')
  const data = await res.json()
  // console.log(data);
  
  return data
}

async function getMixes(){

  try {
    const res = await fetch('https://api.mixcloud.com/search/?q=djkhaaliq&type=cloudcast')
    const data = await res.json()
    console.log(data.data[0].pictures.large);
  
    return data
  } catch (error) {
    console.log(error);
    
  }
  
}




const Page = async () => {




  const YTDATA = await getVideos()
  const MIXDATA = await getMixes()
  
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />

      <MixCarousel slides={MIXDATA.data} options={OPTIONS} />
      <BioCarousel options={BIOOPTIONS} />
      <VideoCarousel slides={YTDATA.videos.items} options={VIDEOOPTIONS}  />
      
      {/* <BlogPostsPreview posts={result.posts} /> */}
      {/* <BlogPostsPagination pagination={result.pagination} /> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default Page;



// below is arguments for Page comp
// {
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }

// below is var's for pagination to go inside Page comp
// const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
//   const result = await wisp.getPosts({ limit: 6, page });