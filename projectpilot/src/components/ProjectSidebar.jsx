import Button from "./Button";

export default function ProjectSidebar({onStartAddProject, projects,onSelectProject,selectProjectID})
{
    return (
       <aside className="w-1/3  px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounder-r-xl ">
          <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">Your Projects</h2>
          <div>
            <Button onClick={onStartAddProject}>
                + Add project
            </Button>
          </div>
          <ul className="mt-8">
             {
                
                projects.map((project) => { 
                   let btnCSSClasses = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"
                    if(project.id === selectProjectID)
                    {
                        btnCSSClasses += " text-stone-200 bg-stone-800"
                    }
                    else
                    {
                        btnCSSClasses += " text-stone-400"
                    }
                  return (<li key={project.id}> 
                   <button className={btnCSSClasses} 
                      onClick={() => onSelectProject(project.id)}
                   >
                       {project.title}
                   </button>
                </li>)
                })
             }
          </ul>
       </aside>
    );
}