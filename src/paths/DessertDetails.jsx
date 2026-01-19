import { useParams, useNavigate } from "react-router-dom";
import desserts from "../data/desserts";
const DessertDetails = () =>{
    const {id} = useParams()
    const dessert = desserts.find((item) =>
    item.id === parseInt(id)
    )
    if(!dessert){
        return<h3>Dessert Not found!</h3>
    }
    const navigate = useNavigate()
    const handleMenu = () =>{
        navigate(-1)
    }
    const dessertImage = {
        1:"/chocolate.png",
        2:"/vanillaS.png",
        3:"/Custard.png",
        4:"/Coffee.png"
    }
    return(
        <div className="details">
                <h1>Dessert Details</h1>
            <div className="each">
            <h2>{dessert.title}</h2>
            <h3>Category: {dessert.category}</h3>
            <img src={dessertImage[dessert.id]} alt={dessert.title}/>
            <p>{dessert.desc}</p>
            <h5>Price: KES {dessert.price}</h5>
            <button onClick={handleMenu}>Back to Menu</button>
</div>
        </div>
    )

}
export default DessertDetails;