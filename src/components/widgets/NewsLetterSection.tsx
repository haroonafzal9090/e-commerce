import React from 'react'
import Wrapper from '../shared/Wrapper'

const NewsLetterSection = () => {
  return (
    <section className='mt-40'>
        <Wrapper>
            <div className='flex flex-col items-center relative'>
                <div className='absolute top-3 sm:text-7xl md:text-8xl lg:text-9xl text-gray-200/60 font-bold -z-10 '>NewsLetter</div>
                <h1 className='font-bold text-3xl mb-4 '>Subscribe Our NewsLetter</h1>
                <p>Get the latest information and promo offers directly</p>
                <form className='flex mt-8 max-lg:flex-col gap-y-3 items-center'>
                    <input className='border border-black text-sm px-5 py-2' type="text" placeholder='Input email address' />
                    <div className='px-2'>
                        <button className='text-white bg-black font-bold px-7 py-2'>Get Started</button>
                    </div>
                </form>
            </div>

        </Wrapper>
    </section>
  )
}

export default NewsLetterSection