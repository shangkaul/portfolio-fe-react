import "./Blogs.css";
import Footer from "./Footer";
export default function Blogs()
{

    var proj=[
        {
            head:"Kickstart with Amazon HealthLake",
            date:"Sep 2021",
            content:"Over the past decade, we have seen a digital transformation in the healthcare landscape. Digitization of the healthcare industry has led to an immense volume of data being collected in the form of clinical notes, lab reports, insurance claims etc. AWS HealthLake aims to ingest this unstructured/unstructured data from disparate on-premise systems and normalize it using NLP algorithms.",
            link:"https://medium.com/@shivangkaul/kickstart-with-amazon-healthlake-bd6ea9075a1e",
    },{
        head:"The thin line between disruption and chaos for startup entrepreneurs.",
        date:"Sep 2021",
        content:"Disruption. A startup is generally labelled as disruptive if it goes against traditional norms to disrupt an entire market or consumer habit. In the past decade, we have seen many online marketplaces come in like Amazon, Uber, Netflix which have become household names. We all love these online marketplaces, as they make our life easier by providing us with a way of doing things more conveniently. But this disruption usually comes at a cost. Chaos. Chaos in the traditional marketplace. In this article, we aim to dive deeper into how these disruptive startups work and is there a more sustainable way to build a disruptive marketplace.",
        link:"https://medium.com/@shivangkaul/the-thin-line-between-disruption-and-chaos-for-startup-entrepreneurs-58a49b7f9f77",
}

    ]
    return(<div>
        <div className="Blogs">
               
               {proj.map((item,i)=>{
                   return(<div className="cardWork">
                   <div className="cardHead">{item.head}</div>
                   <div className="cardDate">{item.date}</div>
                   <hr style={{width:"40%"}} />
                   <div className="cardContent">{item.content}</div>
                   <div className="btnBar"><a href={item.link}><button className="btnBlog">Read More...</button></a></div>
                   </div>

                   )
               })}
                

        </div>
                <Footer/></div>

    )
}