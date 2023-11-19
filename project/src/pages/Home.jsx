import React from 'react'
import SideBar from '../layouts/SideBar/SideBar'
import MySwiper from '../layouts/Swiper/Swiper' 
import Movies from '../layouts/Movies/Movies' 
import Ticket from '../layouts/Tickets/Ticket'
import Video from '../layouts/Videos/Video'
import Cinema from '../layouts/Cinema/Cinema'
import Slider from '../layouts/Slider/Slider'
import Footer from '../layouts/Footer/Footer'

const Home = () => {
  return (
    <div>
        <SideBar />
        <main style={{width: "95%", position: "absolute", right: 0}}>
            <MySwiper />
            <Movies />
            <Ticket />
            <Video />
            <Cinema />
            <Slider />
            <Footer />
        </main>
    </div>
  )
}

export default Home