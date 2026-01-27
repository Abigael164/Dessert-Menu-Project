import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import desserts from "../data/desserts";
import DesserCard from "../components/DesserCard";
const Menu = () =>{
    const [mydesserts,setMyDesserts] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()

        useEffect (() =>{
            const timer = setTimeout(() =>{
                setMyDesserts(desserts)//loads desserts(shows)
                setLoading(false)//hides loading message
            },500 )

        return() => clearTimeout(timer)//cleanup
        },[])

        const handleHome = () =>{
        navigate("/")
    }
        if(loading){
            return<h3 
            style={{backgroundColor:"white",position:"relative",zIndex:"9999999999",display:"flex",
                minHeight:"100vh",justifyContent:"center",fontSize:"30px",color:"black"
            }}>Loading...</h3>
        }
        
    
    
    return(
        <div className="whole">
        
            <h1>Our Menu</h1>
            <h3>Explore our freshly made dessert cups – affordable, 
                delicious, and perfect for every moment🍧.
            </h3>
            <div className="menu">
            {mydesserts.map((dessert) =>
            (
                    <DesserCard key={dessert.id} dessert={dessert}/>
                )     
        )}
        </div>
        <button onClick={handleHome} className="back">Back Home</button>
        </div>
    )

}
export default Menu;