import "./Projects.css";
import Footer from "./Footer";
export default function Work()
{

    var proj=[
        {
            head:"Business Tech Solutions Associate - ZS Associates",
            date:"Aug 2020 - Present",
            content:"Working on building custom solutions leveraging Data Science algorithms and front end frameworks for clients in the Health Sciences space. Domain expertise in the Medical affairs domain.",
            link:"https://www.zs.com/",
    },{
        head:"Full Stack Mobile Dev - Think Digital",
        date:"Aug 2016 - 2020",
        content:"Worked as a Hybrid App developer for Think Digital - college tech club. Worked and managed various full stack development projects using the Ionic Framework for frontend. Other tech - NodeJS, PHP, MySQL",
        link:"https://think-digital.in/",
},{
    head:"Full Stack Dev - Inception Wave",
    date:"Jan 2019-2020",
    content:"Worked on building the startup's flagship product - Grapido. A pprofessional socia media network to connect students and early professionals with mentors. Tech Stack - Ionic Framework, Node,Express, MongoDB",
    link:"https://www.inceptionwave.in/home",
},
{
    head:"Software Intern - DRDO",
    date:"May 2019",
    content:"Developed a wireless CCTV solution POC. I was responsible for developing a basic facial recognition interface using openCV. ",
    link:"https://www.drdo.gov.in/",
}

    ]
    return(<div>
        <div className="Projects">
               
               {proj.map((item,i)=>{
                   return(<div className="cardWork">
                   <div className="cardHead">{item.head}</div>
                   <div className="cardDate">{item.date}</div>
                   <hr style={{width:"40%"}} />
                   <div className="cardContent">{item.content}</div>
                   <div className="btnBar"><a href={item.link}><button className="btnProj">Link</button></a></div>
                   </div>

                   )
               })}
                

        </div>
                <Footer/></div>

    )
}