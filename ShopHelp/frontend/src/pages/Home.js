import {useEffect, useState} from "react"
import ItemDetails from "../components/ItemDetails"
const Home =()=>{
    const[items, setItems] = useState(null)

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await fetch('/api/items')
            const json = await response.json()
            if(response.ok){
                setItems(json)
                console.log(items)
            }

            
        }
        fetchItems();
        
    },[])

    return (
        <div className="home">
            <div className="items">
                {items && items.map((item)=>
                    <ItemDetails key={item._id} item={item}/>
                )}
            </div>
        </div>
    )
}

export default Home