import { useState } from "react";
function EducationInfo(){
    return (
     <EducationForm></EducationForm>
    )
  }
  
  function EducationForm(){

      return(
          <form className="personalForm">
              <h2>Education</h2>
              <input
              className="university"
              type="text"
              required
              placeholder="University"/>
              <input
              className="degreel"
              type="text"
              required
              placeholder="Degree/ Field of Study"/>
                 
             
              <input
              className="startDate"
              type="date"
              required
              placeholder="Start Date"/>
                 
             
              <input
              className="endDate"
              type="date"
              required
              placeholder="Gratuation Date"/>
             <div className="saveDelete">
             <button className="save">Save</button>
             <button className="delete">Delete</button>
             </div>
              <button className="add">+ Add </button>
          </form>
      )
  }
  
  
  export default EducationInfo;