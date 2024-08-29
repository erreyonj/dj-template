import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MixCarousel from '@/components/MixCarousel'
import BioCarousel from '@/components/BioCarousel'
import VideoCarousel from "@/components/VideoCarousel";
import Contact from "@/components/Contact";
import { EmblaOptionsType } from 'embla-carousel'
import '../../css/embla.css'


const MIXOPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const BIOOPTIONS: EmblaOptionsType = { dragFree: true, loop: false }
const VIDEOOPTIONS: EmblaOptionsType = { dragFree: true, loop: false }


async function getVideos(){
  const res = await fetch(`https://djkhaaliq.vercel.app/api/videos`)
  const data = await res.json()
  return data
}

async function getMixes(){
  try {
    const res = await fetch('https://api.mixcloud.com/search/?q=djkhaaliq&type=cloudcast')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error);
  }
}


const Page = async () => {

  const YTDATA = await getVideos()
  const MIXDATA = await getMixes()
  const topTenVids = YTDATA.videos.items.map((video:any, i:number)=>{
    if(i<=9){
      return video
    }
  })
  const topTenMixes = MIXDATA.data.map((mix:any, i:number)=>{
    if(i<=9){
      return mix
    }
  })
  
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />

      <MixCarousel slides={topTenMixes} options={MIXOPTIONS} />
      <BioCarousel options={BIOOPTIONS} />
      <VideoCarousel slides={topTenVids} options={VIDEOOPTIONS}  />
      
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