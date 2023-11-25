//  import Header from "@/pages/header";

import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>

      {/* <div className="bg-black text-white">jnjnjnjjnk</div> */}
      <HeroBanner></HeroBanner>

      <Wrapper>
        <div className=' text-center max-w-[800px] mt-[50px] md:mt-[80px] mx-auto'>

          <div className='font-bold text-[28px] md:text-[34px]  mb-2 leading-tight '>Discover Your Signature Look</div>
          <div className='felx text-[20px] mb-4'>Explore our thoughtfully curated collection of shoes that caters to various styles, occasions, and personalities.  </div>

        </div>

        {/* Product Grid   */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0'>
          <ProductCard />
        </div>


      </Wrapper>
    </main>
  )
}
