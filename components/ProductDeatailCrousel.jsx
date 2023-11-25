import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
import Wrapper from './Wrapper';


export default function ProductDetailCrousel () {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Wrapper>
        <Carousel
                infiniteLoop={true}
                showIndicators={true}
                showStatus={true}
                autoPlay={true}
                thumbWidth={60}
                
                className="productCarousel"
            >
                {/* {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.url}
                        alt={img.attributes.name}
                    />
                ))} */}
                <img src="/p2.png" />
                <img src="/p4.png" />
                <img src="/p3.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" />
            </Carousel>
        </Wrapper>
    </div>
  )
}

