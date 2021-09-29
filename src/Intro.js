import "./styles.css";
import {Link} from "react-router-dom";
 
export default function Intro()
{return(
    <div className="Intro">
        <div className="introContainer">
            <div className="introImg"><img src="https://shangkaul.in/assets/images/myimage.jpg"/></div>
            <div className="introBtn">
                <h3>I'm a Passionate full stack developer and a 
            team player who is ready to take up any role that my team requires.</h3>
            <p>I started my journey as a developer when I joined my college club named Think Digital. Since then I have worked on various full stack and web projects for various clients and individuals. I have worked on PHP,Ionic-anguar, NodeJS, MongoDB and MySQL tech stack. From the last 2 years I have been learning Machine Learning from the core statistical and mathematical point of view. I have also been working on data science projects using Python libraries. I have been able to unify my data science skills and full stack experience to develop real-world, end to end Machine Learning solutions.</p></div>
        
        </div>
        <div className="btn_bar"><Link to="/projects"><button className="btn">Projects</button></Link><Link to="/work"><button className="btn">My Work</button></Link></div>

    </div>
)}