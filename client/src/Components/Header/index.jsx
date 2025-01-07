import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import Logo from '../../assets/images/logo.png';
import { AiOutlineUser, AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { IoBagOutline, IoBagRemoveSharp } from 'react-icons/io5';
import { FaAngleDown, FaAngleRight, FaBlog } from 'react-icons/fa';
import { GiLargeDress, GiPirateCoat, GiDelicatePerfume, GiLipstick } from 'react-icons/gi';
import { RiContactsBook3Line } from 'react-icons/ri';
import { LuBaby } from 'react-icons/lu';
import { BsWatch } from 'react-icons/bs';
import SearchBox from './SearchBox';
import CountryDropdown from '../CountryDropdown';
import SignIn from '../../Pages/SignIn';
import { myContext } from '../../App';
import { IoIosMenu } from 'react-icons/io';

const Header = () => {
    const context = useContext(myContext);
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);
    const toggleDropdown = useCallback(() => {
        setIsDropdownVisible(prev => !prev);
    }, []);

    const goToCart = useCallback(() => navigate("/cart"), [navigate]);

    const handleLogout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        context.setUser(null);
        context.setIsLogin(false);
        navigate("/");
    }, [navigate, context]);

    return (
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">
                        Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay.
                    </p>
                </div>
            </div>
            <header className="header mt-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="logoWrapper col-sm-2">
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="col-sm-10 d-flex align-items-center part2">
                            {context?.countryList?.length > 0 && <CountryDropdown />}
                            <SearchBox />
                            <div className="part3 d-flex align-items-center ml-auto loginHoverOptions">
                                {context?.isLogin ? (
                                    <div
                                        className="profile-wrapper"
                                        onMouseEnter={toggleDropdown}
                                        onMouseLeave={toggleDropdown}
                                    >
                                        <Button className="btn-blue btn-round btn-lg mr-3" aria-label="My Account">
                                            My Account
                                        </Button>
                                        {isDropdownVisible && (
                                            <div className="profileOptionsDropdown">
                                                <ul>
                                                    <li>
                                                        <Link to="/profile">My Profile</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/order">My Orders</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist">Wishlist</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" onClick={handleLogout}>
                                                            <AiOutlineLogout />&nbsp;Logout
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Button
                                        className="btn-blue btn-round btn-lg mr-3"
                                        onClick={context.handleSignInOpen}
                                        aria-label="Login"
                                    >
                                        <AiOutlineUser />&nbsp;Login
                                    </Button>
                                )}
                                {context.showSignInPopup && (
                                    <SignIn
                                        show={context.showSignInPopup}
                                        onClose={context.handleSignInClose}
                                    />
                                )}
                                <div className="ml-auto cartTab d-flex align-items-center">
                                    <span className="price">
                                        ${context.cart.reduce((total, item) => total + (item.discountPrice || 0) * item.quantity, 0).toFixed(2)}
                                    </span>
                                    <div className="position-relative ml-2">
                                        <Button onClick={goToCart} className="circle ml-2" aria-label="Cart">
                                            <IoBagOutline />
                                        </Button>
                                        <span className="count d-flex align-items-center justify-content-center">
                                            {context.cart.reduce((total, item) => total + item.quantity, 0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-3 navPart1">
                            <div className="catWrapper">
                                <Button className="allCatTab align-items-center" onClick={toggleSidebar} aria-label="All Categories">
                                    <span className="icon1 mr-2">
                                        <IoIosMenu />
                                    </span>
                                    <span className="text">ALL CATEGORY</span>
                                    <span className="icon2 ml-2">
                                        <FaAngleDown />
                                    </span>
                                </Button>
                                <div className={`sidebarNav ${isSidebarOpen ? 'open' : ''}`}>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <GiPirateCoat /> &nbsp;Men
                                                <Button className="ml-auto">
                                                    <FaAngleRight />
                                                </Button>
                                            </Link>
                                            <div className="catSubmenu shadow">
                                                <Link to="/">Clothing</Link>
                                                <Link to="/">Footwear</Link>
                                                <Link to="/">Watches</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <GiLargeDress /> &nbsp;Women
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <LuBaby /> &nbsp;Kids
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <BsWatch /> &nbsp;Watches
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <IoBagRemoveSharp /> &nbsp;Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <GiDelicatePerfume /> &nbsp;Perfumes
                                                <Button className="ml-auto">
                                                    <FaAngleRight />
                                                </Button>
                                            </Link>
                                            <div className="catSubmenu shadow">
                                                <Link to="/">Clothing</Link>
                                                <Link to="/">Footwear</Link>
                                                <Link to="/">Watches</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 navPart2 d-flex align-items-center">
                            <ul className="list list-inline ml-auto">
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <AiFillHome /> &nbsp;Home
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <GiPirateCoat /> &nbsp;Men
                                    </Link>
                                    <div className="submenu shadow">
                                        <Link to="/">Clothing</Link>
                                        <Link to="/">Footwear</Link>
                                        <Link to="/">Watches</Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <GiLargeDress /> &nbsp;Women
                                    </Link>
                                    <div className="submenu shadow">
                                        <Link to="/">Clothing</Link>
                                        <Link to="/">Footwear</Link>
                                        <Link to="/">Watches</Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <LuBaby /> &nbsp;Kids
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <GiLipstick /> &nbsp;Beauty
                                    </Link>
                                    <div className="submenu shadow">
                                        <Link to="/">Clothing</Link>
                                        <Link to="/">Footwear</Link>
                                        <Link to="/">Watches</Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <BsWatch /> &nbsp;Watches
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <FaBlog /> &nbsp;Blog
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/">
                                        <RiContactsBook3Line /> &nbsp;Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
