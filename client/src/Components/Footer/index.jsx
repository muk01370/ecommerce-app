import { BiSolidOffer } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Payments from "../../assets/images/payments.jpg"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerInfo">
                <div className="container">
                    <div className="row topInfo">
                        <div className="col d-flex align-items-center">
                            <span><GiFruitBowl/></span>
                            <span className="ml-2">Everyday fresh products</span>
                        </div>
                        <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free delivery for order over $70</span> 
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><BiSolidOffer/></span>
                        <span className="ml-2">Daily Mega Discounts</span>
                        </div>
                        <div className="col d-flex align-items-center lastCol">
                            <span><PiCurrencyCircleDollar/></span>
                        <span className="ml-2">Best price on the market</span>
                        </div>
                    </div>


                    <div className="row mt-4 footerCat">
                         <div className="col footerNav">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                         </div>
                         <div className="col footerNav">
                            <h5>Breakfast & Dairy</h5>
                            <ul>
                                <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                <li><Link to="#">Butter and Margarine</Link></li>
                                <li><Link to="#">Cheese</Link></li>
                                <li><Link to="#">Eggs Substitutes</Link></li>
                                <li><Link to="#">Honey</Link></li>
                                <li><Link to="#">Marmalades</Link></li>
                                <li><Link to="#">Sour Cream and Dips</Link></li>
                                <li><Link to="#">Yogurt</Link></li>
                            </ul>
                         </div>
                         <div className="col footerNav">
                            <h5>Meat & Seafood</h5>
                            <ul>
                                <li><Link to="#">Breakfast Sausage</Link></li>
                                <li><Link to="#">Dinner Sausage</Link></li>
                                <li><Link to="#">Beef</Link></li>
                                <li><Link to="#">Chicken</Link></li>
                                <li><Link to="#">Sliced Deli Meat</Link></li>
                                <li><Link to="#">Shrimp</Link></li>
                                <li><Link to="#">Wild Caught Fillets</Link></li>
                                <li><Link to="#">Crab and Shellfish</Link></li>
                                <li><Link to="#">Farm Raised Fillets</Link></li>
                            </ul>
                         </div>
                         <div className="col footerNav">
                            <h5>Beverages</h5>
                            <ul>
                                <li><Link to="#">Water</Link></li>
                                <li><Link to="#">Sparkling Water</Link></li>
                                <li><Link to="#">Soda & Pop</Link></li>
                                <li><Link to="#">Coffee</Link></li>
                                <li><Link to="#">Milk & Plant-Based Milk</Link></li>
                                <li><Link to="#">Tea & Kombucha</Link></li>
                                <li><Link to="#">Drink Boxes & Pouches</Link></li>
                                <li><Link to="#">Craft Beer</Link></li>
                                <li><Link to="#">Wine</Link></li>
                            </ul>
                         </div>
                         <div className="col footerNav">
                            <h5>Breads & Bakery</h5>
                            <ul>
                                <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                <li><Link to="#">Butter and Margarine</Link></li>
                                <li><Link to="#">Cheese</Link></li>
                                <li><Link to="#">Eggs Substitutes</Link></li>
                                <li><Link to="#">Honey</Link></li>
                                <li><Link to="#">Marmalades</Link></li>
                                <li><Link to="#">Sour Cream and Dips</Link></li>
                                <li><Link to="#">Yogurt</Link></li>
                            </ul>
                         </div>
                    </div>

                </div>
                </div>
                <div className="container bottamFooter d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright 2024 © React Custom Theme. All rights reserved. Powered by Devolyt.</p>
                        </div>
                        <div className="col-md-6 bottamNav">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="d-flex align-items-center">
                                <ul>
                                    <li className=""><Link>Privacy Policy</Link></li>
                                    <li className=""><Link>Terms and Conditions</Link></li>
                                    <li className=""><Link>Cookie</Link></li>
                                </ul>
                            </div>
                                </div>
                                <div className="col-md-6">
                                <img src={Payments} className="w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;