import './Breadcrum.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'
import {ProductType} from "../../types/product.type.ts";

const Breadcrumbs = (props: { product: ProductType | undefined }) => {
    const {product} = props;
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt=""/> Vehicle <img src={arrow_icon} alt=""/> {product?.category} <img
            src={arrow_icon} alt=""/> {product?.name}
        </div>
    )
}

export default Breadcrumbs
