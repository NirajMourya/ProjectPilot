import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects: []
  });

  function handleStartAddProject ()
  {
     setProjectState((prevProjectState) =>{
         return {
           ...prevProjectState, 
           selectedProjectId:null
         }
     })
  }
  
  let content;
  if(projectState.selectedProjectId === null)
  {
    content = <NewProject/>
  }
  else if(projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject}/>
        {content}
    </main>
  );
}

export default App;
