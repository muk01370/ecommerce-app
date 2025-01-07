import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <FaChevronRight className="text-dark" size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-dark" size={24} />
    </div>
  );
};

const HomeBanner = () =>{
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

    return(
        <>
        <div className="homeSlider">
        <div className="container">
        <div className="homeBannerSection mt-4">
        <Slider {...settings}>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/private_brands_main_banner_web_7d4414cc87/private_brands_main_banner_web_7d4414cc87.png" className="w-100" alt="Private Brands Collection"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/watches_main_banner_web_647872b54f/watches_main_banner_web_647872b54f.png" className="w-100" alt="Watches Collection"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/menswear_main_banner_web_132c5d7fea/menswear_main_banner_web_132c5d7fea.png" className="w-100" alt="Menswear Collection"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/women_indianwear_main_banner_web_854bf2fdfb/women_indianwear_main_banner_web_854bf2fdfb.png" className="w-100" alt="Women's Indianwear Collection"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/MAC_Web_23_Oct24_ca21b822aa/MAC_Web_23_Oct24_ca21b822aa.jpg" className="w-100" alt="MAC Cosmetics Collection"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/footwear_main_banner_web_e43f630930/footwear_main_banner_web_e43f630930.png" className="w-100" alt="Footwear Collection"/>
            </div>

        </Slider>
        </div>
        </div>
        </div>
        </>
    )

}

export default HomeBanner;