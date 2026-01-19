import { useNavigate } from "react-router-dom";

const Home = () =>{

    const navigate = useNavigate()
    const handleView = () =>{
        navigate("/menu")
    }
    return(
        <div className="home">
            <h1> Welcome to Bite Cravings Desserts</h1>
            <h2>Sweet moments in every cup🍨</h2>
            <p>From classic chocolate to fruity favorites, <br/>our dessert cups are made 
            fresh and served with love. <br/>Discover flavors that turn ordinary days into 
            sweet memories.</p>
            <button onClick={handleView}>View Menu</button>


        </div>
    )
}
export default Home;