
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner.png";
import banner2 from "../../assets/images/banner1.png";
import banner3 from "../../assets/images/banner2.png";
import banner4 from "../../assets/images/banner3.png";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useState } from "react";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { MdOutlineMailOutline } from "react-icons/md";
import SignIn from "../SignIn";


const Home = () => {
  
    return (
        <>
        <SignIn />
            <HomeBanner />

            <HomeCat/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={banner1} alt="banner" className="cursor w-100" />
                            </div>

                            <div className="banner mt-5">
                                <img src={banner2} alt="banner" className="cursor w-100" />
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Sellers</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All&nbsp;<IoIosArrowRoundForward /></Button>
                            </div>


                            <div className="product_row mt-4">
                            
                                    <ProductItem/>
                                    
                            
                            </div>
                            
                            <div className="bannerDouble mt-4">
                                <div className="row">
                                <div className="col-md-6">
                                <img src={banner3} alt="" className="w-100"/>
                            </div>
                            <div className="col-md-6">
                                <img src={banner4} alt="" className="w-100"/>
                            </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Products</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All&nbsp;<IoIosArrowRoundForward /></Button>
                            </div>


                            <div className="product_row mt-4">
                           
                                    <ProductItem/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="newsLetterSection mt-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>$20 discount for your first order</h6>
                            <h3>Join our newsletter and get...</h3>
                            <p className="text-light">Join our email subscription <br/> now to get updates on promotions and coupons.</p>
                            <form>
                                <MdOutlineMailOutline/>
                                <input type="text" placeholder="Your Email Address"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default Home;