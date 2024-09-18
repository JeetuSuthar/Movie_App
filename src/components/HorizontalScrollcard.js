import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
const HorizontalScrollcard = ({ data = [], heading , trending ,media_type}) => {
    const containerRef = useRef()
    const handleNext = () => {
        containerRef.current.scrollLeft += 300
    }
    const handlePrev = () => {
        containerRef.current.scrollLeft -= 300
    }
    return (
        <div className='container mx-auto px-3 my-10  '>
            <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>
            <div className='relative'>


                <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6  overflow-hidden relative z-10 overflow-x-scroll scroll-smooth transition-all scrolbar-none'>
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} media_type={media_type}/>
                            )
                        })
                    }
                </div>
                <div className='absolute top-0 hidden lg:flex justify-between h-full w-full items-center'>

                    <button onClick={handlePrev} className='bg-white p-1 text-black rounded-full -ml-2 z-10'>
                        <FaAngleDoubleLeft />
                    </button>
                    <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
                        <FaAngleDoubleRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScrollcard