import React from 'react'
import Button from '../Components/Button'


const Subscribe = () => {
  return (
    <section className='max-container flex justify-between max-lg:flex-col items-center gap-10 ' id='contact-us'>
      <h3 className='text-4xl font-palanquin leading-[68px] lg:max-w-md font-bold'>Sign Up form
        <span className='text-coral-red'> Updates </span>
        & Newslatter
      </h3>

      <div className='lg:w-[40%]  w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full '>
        <input type="text" placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center  max-sm:w-full '>
          <Button label={"Sign Up"} fullwidth />
        </div>
      </div>
    </section>
    
  )
}

export default Subscribe
