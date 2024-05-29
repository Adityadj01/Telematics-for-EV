import './RelatedProducts.css'
import data_product from '../../assets/data'
import {Item} from "../Item/Item.tsx";

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
