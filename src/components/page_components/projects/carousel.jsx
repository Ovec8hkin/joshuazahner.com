import React from "react";
import { Carousel } from "react-responsive-carousel";
import GGB from '../../../images/san-fran.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../../css/carousel.css'

export default () => (
    <Carousel autoPlay showThumbs={false} infiniteLoop>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
        <div>
            <img src={GGB} />
        </div>
    </Carousel>
);
