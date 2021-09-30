import "./Footer.css";
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";
export default function Footer()
{
    return(
        <div className="Footer">
            <div className="left">Portfolio @ Shivang -  <a style={{color:"white"}} href="https://shangkaul.in">shangkaul.in</a></div>
            <div className="right">
                <a style={{color:"white"}} href="https://github.com/shangkaul"><FaGithubSquare style={{margin:"0 1rem"}}/></a>
                <a style={{color:"white"}} href="https://www.linkedin.com/in/shivang-k-876906110/"><FaLinkedin style={{margin:"0 1rem"}}/></a>
                
                </div>
        </div>
    )
}