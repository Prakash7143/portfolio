import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import img1 from './imgs/img1.png';
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";


const CarouselPage = () =>{
    return(
        <>
            <Carousel infiniteLoop autoPlay emulateTouch>
                <div className='image'>
                    <img src={img1} alt="pic 1"  />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='image'>
                    <img src={img2} alt="pic 1"  />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className='image'>
                    <img src={img3} alt="pic 1"  />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='image'>
                    <img src={img4} alt="pic 1"  />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </>
    )
}

export default CarouselPage;