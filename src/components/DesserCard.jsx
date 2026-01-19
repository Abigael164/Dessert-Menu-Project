import { useNavigate } from "react-router-dom";
const DesserCard = ({dessert}) =>{
    const navigate = useNavigate();
        const handleDessert = () =>{
                navigate(`/dessertdetails/${dessert.id}`)
        }
    return(
        <div className="card">
            <h2>{dessert.title}</h2>
            <p>Category: {dessert.category}</p>
            <p>KES {dessert.price}</p>
            <button onClick={handleDessert}>View Details</button>
        
        </div>
    )

}
export default DesserCard;