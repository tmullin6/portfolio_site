import About from "./components/About";
import ProjectList from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

const Header = ()=>{
  return(
    <div className="header">
      <div className="title">
          <p>Tyler Mullins Web Developer</p>
      </div>
      <div className="links">
          <a>About</a>
          <a>Projects</a>
          <a>Tech</a>
          <a>Contact</a>
      </div>
    </div>
  )
}


function App() {
 

  return (

    <div>
      <Header  /> 
      <About />
      <Tech />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
