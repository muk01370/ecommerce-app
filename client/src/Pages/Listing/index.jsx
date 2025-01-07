import Sidebar from "../../Components/Sidebar";
import banner5 from "../../assets/images/banner4.png";
import Button from '@mui/material/Button';
import { MdMenu } from "react-icons/md";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';


const Listing = () => {

        const[productView,setproductView] = useState('four');
        const [anchorEl, setAnchorEl] = useState(null);
        const openDropdown = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

    return (
        <div className="container">
            <section className="product_listing_page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />
                        <div className="main-content" style={{ flex: 1, }}>
                            {/* Main content here */}
                        </div>
                        <div className="content_right">
                            <img src={banner5} className="w-100" />

                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex btnWrapper">
                                    <Button className={productView==='one' && 'act'} onClick={()=> setproductView('one')}><MdMenu /></Button>
                                    <Button className={productView==='two' && 'act'} onClick={()=> setproductView('two')}><TfiLayoutGrid2Alt /></Button>
                                    <Button className={productView==='three' && 'act'} onClick={()=> setproductView('three')}><TfiLayoutGrid3Alt /></Button>
                                    <Button className={productView==='four' && 'act'} onClick={()=> setproductView('four')}><TfiLayoutGrid4Alt /></Button>
                                </div>

                                <div className="ml-auto showByFilter">

                                    <Button onClick={handleClick}>Show 9<FaAngleDown /></Button>
                                    <Menu
                                        className="w-100 showByPerPageDropdown"
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-Button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>6</MenuItem>
                                        <MenuItem onClick={handleClose}>12</MenuItem>
                                        <MenuItem onClick={handleClose}>18</MenuItem>
                                        <MenuItem onClick={handleClose}>24</MenuItem>
                                    </Menu>
                                </div>
                            </div>


                            <div className="productListing">
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                            </div>


                            <div className="d-flex align-items-center justify-content-center mt-5">
                            <Pagination count={10} color="primary" size="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Listing;