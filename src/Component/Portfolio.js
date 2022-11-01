import React from 'react'
import work1 from "../Assets/work-1.png"
import work2 from "../Assets/work-2.png"
import work3 from "../Assets/work-3.png"

function Portfolio() {
  return (
    <div id='portfolio' className=' m-auto max-w-max'>
      <h1 className='text-4xl font-bold mt-10 mb-10 text-red-500' >My Project</h1>
        <div className="container flex md:space-x-20 flex-col md:flex-row items-center space-y-14 md:space-y-0">
        <img src={work1} alt="work1" className='max-w-xs hover:bg-blue-500' />
        <img src={work2} alt="work2" className='max-w-xs' />
        <img src={work3} alt="work3" className='max-w-xs' />
      </div>
    </div>
  )
}

export default Portfolio
