import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import Image from 'next/image'
import Link from 'next/link'

const TopConrainer = () => {
    const paragraph = "Anyone can beat you but no one can beat your outfit as long as \n you wear Dine outfits."
    return (
        <section className='max-lg:mt-10'>
            <Wrapper>
                <div className='flex flex-col md:flex-row items-center'>
                    {/*Left Side*/}
                    <div className='flex-1'>
                        <span className=' px-5 py-3 bg-blue-100/100 text-blue-700 rounded-lg font-bold'>Sale 70%</span>
                        <h1 className='scroll-m-20 mt-10 text-5xl sm:text-7xl font-[650] tracking-tight lg:text-5xl"'>An Industrial Take on Streetwear</h1>
                        <p className='leading-7 text-md [&:not(:first-child)]:mt-6 max-w-lg mt-9 mb-8'>{paragraph}</p>
                        <Link href={"/All-Products"}>
                        <div className='mt-10'>
                        <Button text="Start Shopping"/>
                        </div>
                        </Link>

                        <div className='grid grid-cols-4 max-lg:grid-cols-2 gap-x-2 gap-y-4 h-full items-end mt-28 '>
                            <Image  src={"/images/Featured1.png"} alt='feature-1' width={100} height={35}/>
                            <Image src={"/images/Featured2.png"} alt='feature-2' width={100} height={35}/>
                            <Image src={"/images/Featured3.png"} alt='feature-3' width={100} height={35}/>
                            <Image src={"/images/Featured4.png"} alt='feature-4' width={100} height={35}/>
                        </div>
                    </div>
                    {/*Right Side*/}
                    <div className='h-[600px] w-[600px] bg-[#ffece3] rounded-full items-center mt-14 max-lg:hidden lg:flex justify-center '>
                        <Image className='h-[650px] w-[650px] ' src={"/images/header.webp"} alt='Header-Image' height={650} width={650}/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default TopConrainer