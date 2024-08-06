import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import EmblaCarousel from '@/components/EmblaCarousel'
import BioCarousel from '@/components/BioCarousel'
import VideoCarousel from "@/components/VideoCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../css/embla.css'


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const BIOOPTIONS: EmblaOptionsType = { dragFree: true, loop: false }
const VIDEOOPTIONS: EmblaOptionsType = { dragFree: true, loop: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 

const Page = async () => {
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <BioCarousel options={BIOOPTIONS} />
      <VideoCarousel options={VIDEOOPTIONS} />
      
      {/* <BlogPostsPreview posts={result.posts} /> */}
      {/* <BlogPostsPagination pagination={result.pagination} /> */}
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