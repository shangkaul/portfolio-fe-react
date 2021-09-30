import "./styles.css";
import {Link} from "react-router-dom";

export default function Nav()
{return(
    <div className="Nav">
        <ul>
            <Link  style={{ textDecoration: 'none' }} to="/">
                <li className="navHead">Home</li>
            </Link>
            <Link  style={{ textDecoration: 'none' }} to="/projects">
                <li className="navHead">Projects</li>
            </Link>
            <Link  style={{ textDecoration: 'none' }} to="/work">
                <li className="navHead">Work</li>
            </Link>
            <Link  style={{ textDecoration: 'none' }} to="/blogs">
                <li className="navHead">Blogs</li>
            </Link>
        </ul>
    </div>
)}