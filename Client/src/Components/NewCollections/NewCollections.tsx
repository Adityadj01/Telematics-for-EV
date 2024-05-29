import './NewCollections.css'
import './NewCollections.css'
import new_collection from '../../assets/new_collections.ts'
import {Item} from "../Item/Item.tsx";

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>Upcoming Vehicles</h1>
            <hr/>
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections
