/* eslint-disable react/prop-types */


function WorkExperienceInfo({workData , onWorkDataChange , handleAddworkExp,}){
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddworkExp()
      };
      const handleworkDateChange = (e) => {
        const { name, value } = e.target;
        onWorkDataChange(name, value);
      };

      return(

          <form className="personalForm" onSubmit={handleSubmit}>
              <h2>Work Experience</h2>
              <input
              className="position"
              type="text"
              
              placeholder="Position"
              name="position"
              value={workData.position}
              onChange={handleworkDateChange}
              />
              <input
              className="company"
              type="text"
             
              placeholder="Company"
              name="company"
              value={workData.company}
              onChange={handleworkDateChange}/>
                 
             
              <input
              className="startDate"
              type="date"
              
              placeholder="Start Date"
              name="startDate"
              value={workData.startDate}
              onChange={handleworkDateChange}/>
                 
             
              <input
              className="endDate"
              type="date"
             
              placeholder="End Date"
              name="endDate"
              value={workData.endDate}
              onChange={handleworkDateChange}/>

             <div className="saveDelete">
             <button className="save" type="submit">Save</button>
             <button className="delete">Delete</button>
             </div>
              <button className="add" >+ Add </button>
          </form>
      )
  }
  
  
  export default WorkExperienceInfo;