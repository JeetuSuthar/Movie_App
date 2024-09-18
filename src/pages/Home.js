import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollcard from '../components/HorizontalScrollcard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)
 
  const {data : nowPlayingData}= useFetch('/movie/now_playing')
  const {data : topRatedData}= useFetch('/movie/top_rated')
  const {data : popularTvShowData}= useFetch('/tv/popular')
  const {data : onTheAirShowData}= useFetch('/tv/on_the_air')
  
  
  return (
    <div>
      <BannerHome />
      <HorizontalScrollcard data={trendingData}  heading={"Trending Movies"} trending={true} />
      <HorizontalScrollcard data={nowPlayingData}  heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScrollcard data={topRatedData}  heading={"Top Rated Movies"} media_type={"movie"}/>
      <HorizontalScrollcard data={popularTvShowData}  heading={"Popular Tv Shows"} media_type={"tv"}/>
      <HorizontalScrollcard data={onTheAirShowData}  heading={"On The Air Shows"} media_type={"tv"}/>
          
    </div>
  )
}

export default Home
