
import ProductDetailCrousel from '@/components/ProductDeatailCrousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/Io'
import { MyContext } from '@/pages/_app'
import { useRouter } from 'next/router'
import AddToCartNotification from '@/components/AddToCartNotification'

export default function ProductDetails() {
    
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [size, setSize] = useState(undefined)

    const router = useRouter()
    const { slug } = router.query

    // Using Context API to use app functions in this file
    const { addToCart } = MyContext()


    const [pin, setPin] = useState(undefined)
    const [service, setService] = useState()

    // Pin Code Service Availability 
    const checkServiceAvailability = async () => {
        let pins = await fetch("http://localhost:3000/api/pincode");
        let pinJson = await pins.json();
        if (pinJson.includes(+pin)) {
            setService(true)
        }
        else {
            setService(false)
        }
    }


    const onChangePin = (e) => {
        setPin(e.target.value)
    }


    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left col start  */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'><ProductDetailCrousel /> </div>
                    {/* left col end  */}

                    {/* Right col start  */}
                    <div className="flex-[1] py-3">

                        {/* Product Title */}
                        <div className='font-bold text-[34px] mb-2'>
                            Jorden Ratro 6 G
                        </div>

                        {/* Product Subtitle */}
                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>

                        {/* Price Details */}
                        <div className='text-lg font-semibold'>
                            Price : 2500 Rs
                        </div>
                        <div className='text-sm text-black/[0.5]'>
                            Incl. of Texes
                        </div>
                        <div className='text-sm text-black/[0.5] mb-20'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product Sizes */}
                        <div className='mb-10'>

                            {/* Size Head ing Start  */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>

                                <div className='text-sm font-medium cursor-pointer text-black/[0.5]'>
                                    Select Guide
                                </div>
                            </div>
                            {/* Size Heading  end */}




                            {/* Size Selection Start */}
                            <div className={`grid grid-cols-3 gap-2 }`}>
                                <div onClick={() => { return setSize("UK-6") }}
                                    className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-6' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-6
                                </div>
                                <div onClick={() => { return setSize("UK-6.5") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-6.5' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-6.5
                                </div>
                                <div onClick={() => { return setSize("UK-7") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-7' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-7
                                </div>
                                <div onClick={() => { return setSize("UK-7.5") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-7.5' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-7.5
                                </div>
                                <div onClick={() => { return setSize("UK-8") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-8' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-8
                                </div>
                                <div onClick={() => { return setSize("UK-8.5") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-8.5' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-8.5
                                </div>
                                <div onClick={() => { return setSize("UK-9") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-9' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-9
                                </div>
                                <div onClick={() => { return setSize("UK-9.5") }} className={`border text-center rounded-md hover:border-black py-3 cursor-pointer font-medium ${size == 'UK-9.5' ? 'bg-gray-300' : 'bg-white'}`}>
                                    UK-9.5
                                </div>
                                <div onClick={() => { return setSize("UK-10") }} className='border text-center rounded-md  py-3 cursor-not-allowed opacity-50 bg-black/[0.1]'>
                                    UK-10
                                </div>
                                <div onClick={() => { return setSize("UK-10.5") }} className='border text-center rounded-md  py-3 cursor-not-allowed opacity-50 mb-3 bg-black/[0.1]'>
                                    UK-10.5
                                </div>
                                <div onClick={() => { return setSize("UK-11") }} className='border text-center rounded-md  py-3 cursor-not-allowed opacity-50 mb-3 bg-black/[0.1]'>
                                    UK-11
                                </div>
                            </div>
                            {/* Size Selection End */}


                            {/* Showing Error Message Start*/}
                            {!size && <div className='text-red-500 text-lg font-semibold mb-3'>
                                Size Selection is required
                            </div>}
                            {/* Showing Error Message End */}

                            {/* Pin Code Service Availability Start */}
                            {!pin && <div className='text-lg font-semibold'>Enter Postal Code Address</div>}
                            <div className='my-4 '>

                                <form onSubmit={(e) => { e.preventDefault() }} method="post">
                                    <input onChange={onChangePin} type="text" placeholder='Enter your Pincode' className='border px-3 py-4 rounded-3xl mr-2 border-black' />
                                    <button onClick={checkServiceAvailability} className='bg-black border border-black text-white text-md px-16 py-4 rounded-3xl font-md transition-transform active:scale-95 hover:opacity-75  '>Check</button>
                                </form>

                            </div>

                            {!service && service != null && <div className="text-red-600 mb-3">
                                We can't deliver to this Postal Code
                            </div>}

                            {service && service != null && <div className="text-green-600 mb-3">
                                Delivery Services are available at this pin code
                            </div>}
                            {/* Pin Code Service Availability End */}


                            {/* Add To Chart Button Start */}
                            {size && service && <button
                                onClick={() => {
                                    addToCart(slug, "Jorden Ratro 6 G", 1, 2500, size, "Blue", "/product-1.webp", "Men's Golf Shoes")
                                    setIsCartVisible(true);
                                    setTimeout(() => {
                                        setIsCartVisible(false);
                                    }, 3000);
                                }}
                                className='w-full  text-lg bg-black text-white border  rounded-full py-4 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 mb-3'>
                                Add To Cart
                            </button>
                            }

                            {!service && <button
                                className='disabled:bg-gray-800 w-full  text-lg bg-gray-400  text-black border cursor-not-allowed rounded-full py-4 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 mb-3'>
                                Add To Cart
                            </button>}
                            {/* {console.log(addToCart)} */}
                            {/* Add To Chart Button End */}

                                <AddToCartNotification  isVisible={isCartVisible} />

                            {/* Wishlist Button Start */}
                            <button className='w-full  text-lg border border-black rounded-full py-4 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 mb-10'>
                                Wishlist
                                <IoMdHeartEmpty size={20} />
                            </button>
                            {/* Wishlist Button End */}


                            {/* Descriptive Paragraph Start */}
                            <div>
                                <div className='text-lg font-bold mb-5'>
                                    Product Details
                                </div>
                                <div className='text-md mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis autem ab, ipsam doloribus explicabo, sit tenetur recusandae, architecto repellendus fugit ut dolor accusamus? Molestias voluptates unde aliquam officiis ratione?</div>
                                <div className='text-md mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis autem ab, ipsam doloribus explicabo, sit tenetur recusandae, architecto repellendus fugit ut dolor accusamus? Molestias voluptates unde aliquam officiis ratione?</div>
                            </div>
                            {/* Descriptive Paragraph End */}


                        </div>






                    </div>
                    {/* Right col end  */}

                </div>
             

                <RelatedProducts />
            </Wrapper>
        </div>
    )
}

