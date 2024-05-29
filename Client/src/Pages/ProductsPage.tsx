import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs.tsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.tsx";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.tsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.tsx";
import {useEffect, useState} from "react";
import {ProductType} from "../types/product.type.ts";
import {getAllProducts} from "../Services/ProductService.tsx";
import {useParams} from "react-router-dom";

export const ProductsPage = () => {
    const [product, setProduct] = useState<ProductType>();
    const {productId} = useParams();
    useEffect(() => {
        getAllProducts().then(r => {
            setProduct(r.data.data.find(((e) => e.id === Number(productId))))
        })

    }, [productId]);
    return (
        <div>
            <Breadcrumbs product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
};
