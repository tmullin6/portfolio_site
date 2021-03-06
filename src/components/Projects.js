import {projects} from "../text/projects";

const ProjectList = () =>{

    return(
        <div className="project-list">

            <div>Project Work:</div><br />
            {projects.map((projects,key)=>{
                return (
                <div key={key} className="project-card">
                    <div className="project-info">
                        {projects.name} <br />
                        Description: <br />
                        {projects.desc}<br />
                        Site URL:<br />
                        {projects.link}<br />
                        GitHub Repo:<br />
                        <a href={projects.github} target="_blank">{projects.name}</a>

                    </div>
                    <div className="project-photo">
                        photo here
                    </div>
                </div>
            )})}
           
        </div>
    )
    
    
}

export default ProjectList;