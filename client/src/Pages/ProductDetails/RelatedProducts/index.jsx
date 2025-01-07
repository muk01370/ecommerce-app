import Slider from "react-slick";
import ProductItem from "../../../Components/ProductItem";


const RelatedProduct = (props) => {
    var productSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slidesToShow: 6,
        slidesToScroll: 1,
    };
    return (
        <div className="product_row w-100 mt-4">
            <div className="d-flex align-items-center">
                <div className="info">
                    <h3 className="mb-3 hd">{props.title}</h3>
                </div>

            </div>
            <Slider {...productSliderOptions}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </Slider>
        </div>
    )
}

export default RelatedProduct;