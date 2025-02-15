'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Button } from '../ui/button'
import { CircleX, Search } from 'lucide-react'
import Talent from './Talent'

const LandingPage = () => {
  const [searchItem, setSearchItem] = useState('')
  
  const handleChange = (e) => {
    setSearchItem(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchItem('')
  }

  return (
    <div className='flex flex-col mx-24'>
        <section className='flex justify-center items-center bg-slate-950 rounded-lg my-14 text-white h-[500px]'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='text-4xl text-wrap py-3'>Scale your professional workfore with top-notch freelancers here at SkillUp!</h2>
                <p className='text-lg py-3'>Find the right talent for your project today!</p>
                <div className='flex items-center rounded-lg text-black bg-white my-3'>
                    <input 
                      type="text" 
                      placeholder="Search" 
                      className='py-3 px-4 w-full rounded-l-lg focus:outline-none'
                      value={searchItem}
                      onChange={handleChange}/>
                      {searchItem && (
                        <span 
                          onClick={handleClearSearch} 
                          className='cursor-pointer px-4 py-3 text-gray-500'>
                          <CircleX/>
                        </span>
                      )}
                    <Button className='rounded-r-lg px-4 py-3 bg-primary text-white mx-2'> 
                      <Search/>
                    </Button>
                </div>
            </div>
        </section>
        <div className='flex px-4 py-4 gap-4'>
          <Talent className='mx-3'/>
        </div>
    </div>
  )
}

export default LandingPage