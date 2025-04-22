"use client";
import React from "react";
import Slider from "react-slick";
import Slides from "./Slides";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  pauseOnHover: false,
};

const slideData = [
  {
    id: 0,
    img: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
    mainTitle: "WOMENS LATEST FASHION",
    price: "$20",
    title: "Sale Offer",
  },
  {
    id: 1,
    img: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_7.jpg",
    mainTitle: "WOMENS SUNGLASSES",
    price: "$30",
    title: "Summer Offer",
  },
  {
    id: 2,
    img: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_2.jpg",
    mainTitle: "WOMENS SUMMER SALE",
    price: "$50",
    title: "Summer Sale",
  },
  {
    id: 3,
    img: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_12.jpg",
    mainTitle: "WOMENS ACCESSORIES",
    price: "$30",
    title: "Sale Offer",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slides
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
