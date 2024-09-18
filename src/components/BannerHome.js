import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData)
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const [currImage,setCurrImage]=useState(0);
    const handleNext=()=>{
        if(currImage<bannerData.length-1){
            setCurrImage(preve=>preve+1)
        }
    }
    const handlePrev=()=>{
        if(currImage>0){
            setCurrImage(preve=>preve-1)
        }
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(currImage<bannerData.length-1){
                handleNext()
            }else{
                setCurrImage(0)
            }
        },5000)
        return()=>clearInterval(interval)
    },[imageURL,bannerData,currImage])
    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {
                    bannerData.map((data, index) => {
                       
                        return (
                            <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform:`translateX(-${currImage*100}%)` }}>
                                <div className='w-full h-full'>
                                    <img
                                        src={imageURL + data.backdrop_path}
                                        className='h-full w-full object-cover'
                                    />
                                </div>

                                {/*Bbutton for next and previous image*/ }
                                <div className='absolute top-0 w-full h-full hidden  items-center justify-between p-4 group-hover:lg:flex'>
                                    <button onClick={handlePrev} className='bg-white z-10 p-2 rounded-full text-2xl text-black '>
                                    <FaAngleDoubleLeft/>
                                    </button>
                                    <button onClick={handleNext} className='bg-white z-10 p-2 rounded-full text-2xl text-black'>
                                    <FaAngleDoubleRight/>
                                    </button>
                                </div>

                                <div className='absolute top-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparenttrans'>

                                </div>
                                <div className='container mx-auto'>
                                <div className=' w-full absolute bottom-0 max-w-md px-3'>
                                    <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data?.title || data?.name || "title not available"}</h2>
                                    <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                    <div className='flex items-center gap-4'>
                                        <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                                        <span>|</span>
                                        <p>View: {Number(data.popularity).toFixed(0)}</p>
                                    </div>
                                    <button className='bg-gradient-to-r from-orange-300 to-yellow-100 px-4 py-2 text-black font-bold rounded mt-4 cursor-pointer hover:scale-105  '>
                                        play Now
                                    </button>
                                </div>
                                </div>
                                


                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BannerHome



