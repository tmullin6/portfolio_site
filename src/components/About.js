import ReactMarkdown from "react-markdown";
import aboutText from "../text/about.md"
import { useState,useEffect } from "react";

const About =()=>{
    const [text,setText]=useState('');

    useEffect(()=>{
        fetch(aboutText).then(res=>res.text()).then(text=>setText(text));
    })
    

    return(
        <div className="about">
        <ReactMarkdown children={text} />
        </div>
    )
};

export default About;