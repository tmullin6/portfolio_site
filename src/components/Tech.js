import {techList} from "../text/tech"

const Tech = ()=>{

    
    return(
        <div className="tech">
            {techList.map((data,key)=>{
                return (
                    <div key={key} className="tech-box">
                        {data.name} <br />
                        <ul>
                        {data.tech.map((tech,key)=> {
                            return (
                                <li key={key}>{tech}</li>
                            )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Tech;