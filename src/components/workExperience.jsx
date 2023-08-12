

function WorkExperienceInfo(){




    return (
     <WorkExperienceForm></WorkExperienceForm>
    )
  }
  
  function WorkExperienceForm(){
      return(
          <form className="personalForm">
              <h2>Work Experience</h2>
              <input
              className="position"
              type="text"
              required
              placeholder="Position"/>
              <input
              className="company"
              type="text"
              required
              placeholder="Company"/>
                 
             
              <input
              className="startDate"
              type="date"
              required
              placeholder="Start Date"/>
                 
             
              <input
              className="endDate"
              type="date"
              required
              placeholder="End Date"/>

             <div className="saveDelete">
             <button className="save">Save</button>
             <button className="delete">Delete</button>
             </div>
              <button className="add">+ Add </button>
          </form>
      )
  }
  
  
  export default WorkExperienceInfo;