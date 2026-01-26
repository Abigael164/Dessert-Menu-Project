import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
const Footer = () =>{
    return(
       <footer>
        <div className="icon" 
        style={{display:"flex",gap:"15px",marginTop:"190px",position:"relative",zIndex:"9999"}}>
            <a href="https://www.instagram.com/bite_cravings_ke?igsh=dzJheXRibTJqZ2di" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#f16393ff"/>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} color="#2580f7ff"/>
            </a>
            <a href="https://chat.whatsapp.com/JuiUBlk8SEa8uzFFYHQBXM" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} color="rgba(152, 236, 73)"/>
            </a>
            </div>
            <p style={{margin:"0px",position:"relative",zIndex:"9"}}>&copy; {new Date().getFullYear()} Bite Cravings</p>
       </footer>
    )
}
export default Footer;