import React from "react"
import Section from "./Sections"


const FirstPageContent =({sections})=>{
    return(
        <div>
            {sections.map( section => {
                return <Section content={section}/>
            })}
        </div>
    )
}

export default FirstPageContent;