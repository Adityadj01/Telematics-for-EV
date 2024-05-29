import './ProductDisplay.css'
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import {ProductType} from "../../types/product.type.ts";
import {addItemsToCart} from "../../Services/ProductService.tsx";


const ProductDisplay = (props: { product: ProductType | undefined }) => {

    const {product} = props;
    const addToCart = (id: number) => {
        addItemsToCart(id)
    }
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={`../src/assets${product?.image}`} alt=""/>
                    <img src={`../src/assets${product?.image}`} alt=""/>
                    <img src={`../src/assets${product?.image}`} alt=""/>
                    <img src={`../src/assets${product?.image}`} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={`../src/assets${product?.image}`} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product?.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-description">
                    Electric vehicles (EVs) are emission-free automobiles powered by electric motors, offering
                    eco-friendly transportation solutions. With lower operating costs, instant torque, and advancing
                    battery technology providing longer ranges, EVs are revolutionizing the automotive industry towards
                    a sustainable future.
                </div>
                <div className="productdisplay-right-size">

                    <div className="productdisplay-right-sizes">

                    </div>
                </div>
                <button onClick={() => {
                    addToCart(product?.id || 0)
                }}>Select Vehicle
                </button>
                <p className='productdisplay-right-category'><span>Category :</span>2 Wheeler,3 Wheeler,4 Wheeler</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
