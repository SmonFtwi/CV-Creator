/* eslint-disable react/prop-types */


function WorkExperienceInfo({workData , onWorkDataChange}){
    const handleSubmit = (e) => {
        e.preventDefault();
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
              required
              placeholder="Position"
              name="position"
              value={workData.position}
              onChange={handleworkDateChange}
              />
              <input
              className="company"
              type="text"
              required
              placeholder="Company"
              name="company"
              value={workData.company}
              onChange={handleworkDateChange}/>
                 
             
              <input
              className="startDate"
              type="date"
              required
              placeholder="Start Date"
              name="startDate"
              value={workData.startDate}
              onChange={handleworkDateChange}/>
                 
             
              <input
              className="endDate"
              type="date"
              required
              placeholder="End Date"
              name="endDate"
              value={workData.endDate}
              onChange={handleworkDateChange}/>

             <div className="saveDelete">
             <button className="save">Save</button>
             <button className="delete">Delete</button>
             </div>
              <button className="add">+ Add </button>
          </form>
      )
  }
  
  
  export default WorkExperienceInfo;