/* eslint-disable react/prop-types */

function EducationInfo({educationData, onEducationDataChange}){
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      const handleEducationDataChange = (e) => {
        const { name, value } = e.target;
        onEducationDataChange(name, value);
      };
      return(
          <form className="personalForm" onSubmit={handleSubmit}>
              <h2>Education</h2>
              <input
              className="university"
              type="text"
              required
              placeholder="University"
              name="university"
              value={educationData.university}
              onChange={handleEducationDataChange}/>
              <input
              className="degreel"
              type="text"
              required
              placeholder="Degree/ Field of Study"
              name="degree"
              value={educationData.degree}
              onChange={handleEducationDataChange}/>
                 
             
              <input
              className="startDate"
              type="date"
              required
              placeholder="Start Date"
              name="startDate"
              value={educationData.startDate}
              onChange={handleEducationDataChange}/>
                 
             
              <input
              className="endDate"
              type="date"
              required
              placeholder="Gratuation Date"
              name="endDate"
              value={educationData.endDate}
              onChange={handleEducationDataChange}/>
              
             <div className="saveDelete">
             <button className="save">Save</button>
             <button className="delete">Delete</button>
             </div>
              <button className="add">+ Add </button>
          </form>
      )
  }
  
  
  export default EducationInfo;