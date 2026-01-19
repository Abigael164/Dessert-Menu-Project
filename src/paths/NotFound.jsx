import { useNavigate } from "react-router-dom";

const NotFound = () =>{
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate("/")
    }
    return(
        <div className="found">
            <h1>Page Not Found!</h1>
            <p>Page does not exist!</p>
            <button onClick={handleHome}>Back Home</button>

        </div>
    )
}
export default NotFound;