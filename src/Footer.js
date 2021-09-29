import "./Footer.css";
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa";
export default function Footer()
{
    return(
        <div className="Footer">
            <div className="left">Portfolio @ Shivang</div>
            <div className="right"><FaGithubSquare style={{margin:"0 1rem"}}/><FaInstagramSquare style={{margin:"0 1rem"}}/><FaLinkedin style={{margin:"0 1rem"}}/></div>
        </div>
    )
}