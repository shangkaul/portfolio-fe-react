import "./Projects.css";
import Footer from "./Footer";
export default function Projects()
{

    var proj=[
        {
            head:"CLI Quiz - Bike",
            link:"https://replit.com/@shangkaul/Quiz-CLI?embed=1&output=1",
            git:"https://github.com/shangkaul/CLI_test_app"
    },
    {
        head:"CLI Quiz - Trivia",
        link:"https://replit.com/@shangkaul/Quiz-CLI2?embed=1&output=1",
        git:"https://github.com/shangkaul/CLI_test_app"
},
{
    head:"Emoji Finder",
    link:"https://csb-2nqfw.netlify.app/",
    git:"https://github.com/shangkaul/Emoji-react"
},
        {
            head:"Travel Recommender",
            link:"https://travelreact.netlify.app/",
            git:"https://github.com/shangkaul/Travel-barebones-react"
    },
    {
        head:"Triangle App",
        link:"https://triangle-bingo.netlify.app/",
        git:"https://github.com/shangkaul/triangle-react"
},
{
    head:"Profit Calculator",
    link:"https://stock-prof.netlify.app/",
    git:"https://github.com/shangkaul/profit-cal-react"
},
{
    head:"Cash register",
    link:"https://cash-regstr.netlify.app/",
    git:"https://github.com/shangkaul/cash-reg-react"
},
{
    head:"Lucky Birthday",
    link:"https://lucky-b-day.netlify.app/",
    git:"https://github.com/shangkaul/lucky-birthday-react"
},
{
    head:"Palindrome Date",
    link:"https://palin-date.netlify.app/",
    git:"https://github.com/shangkaul/date-palindrome-react"
},
{
    head:"Old English Translator",
    link:"https://shakespeareenglishtranslate.netlify.app/",
    git:"https://github.com/shangkaul/old_eng_translator"
},
{
    head:"Minion Translator",
    link:"https://purpleminion.netlify.app/",
    git:"https://github.com/shangkaul/banana_translator"
},
{
    head:"Static site",
    link:"https://thisisthedemosite.netlify.app/",
    git:"https://github.com/shangkaul/git_intro"
}
    ]
    return(<div>
        <div className="Projects">
               
               {proj.map((item,i)=>{
                   return(<div className="card">
                   <div className="cardHead">{item.head}</div>
                   <div className="btnBar"><a href={item.link}><button className="btnProj">Link</button></a></div>
                   <div className="btnBar"><a href={item.git}><button className="btnProj"> Github</button></a></div>
                   </div>

                   )
               })}
                

        </div>
                <Footer/></div>

    )
}