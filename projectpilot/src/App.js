import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects: []
  });

   function handleSelectProject(id)
   {
    setProjectState((prevProjectState) =>{
      return {
        ...prevProjectState, 
        selectedProjectId:id
      }
    })
   }
  function handleStartAddProject ()
  {
     setProjectState((prevProjectState) =>{
         return {
           ...prevProjectState, 
           selectedProjectId:null
         }
     })
  }
  
  function handleAddProject(projectData)
  {
     setProjectState(prevState => {
         const projectID = Math.random();
         const newProject = {
           ...projectData,
           id: projectID
         }

        return {
          ...prevState,
          selectedProjectId:undefined,
          projects:[...prevState.projects,newProject]
        };
     })
  }

  function handleCancelAddProject()
  {
    setProjectState(prevState => {
      
     return {
       ...prevState,
       selectedProjectId:undefined
     };
  })
  }
   
  const selectedProject = projectState.projects.find(project => project.id ===projectState.selectedProjectId)
  let content = <SelectedProject project={selectedProject}/>;
  if(projectState.selectedProjectId === null)
  {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects} 
        onSelectProject={handleSelectProject}
        selectProjectID={projectState.selectedProjectId}/>
        {content}
    </main>
  );
}

export default App;
