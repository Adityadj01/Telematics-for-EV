import {Item} from "../Components/Item/Item.tsx";
import {useEffect, useState} from "react";
import dropdown_icon from '../assets/dropdown_icon.png'
import {ProductType} from "../types/product.type.ts";
import {getAllProducts} from "../Services/ProductService.tsx";
import './Category.css'

export const CategoryPage = (props: { category: string, banner: string }) => {
    const [all_product, setAll_product] = useState<ProductType[]>([]);
    useEffect(() => {
        getAllProducts().then(r => {
            setAll_product(r.data.data)
        })
    }, []);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={`../src/assets${item.image}`}/>
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Coming Soon
            </div>
        </div>
    );
};
