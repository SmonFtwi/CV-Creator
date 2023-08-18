import { useState } from "react";
import PersonalInfo from "./components/personalInfo";
import WorkExperienceInfo from "./components/workExperience";
import EducationInfo from "./components/education";
import ResumePreview from "./components/resume";


function App() {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  
  const [workData, setWorkData] = useState({
     position:"",
     company:"",
     startDate:"",
     endDate:""
  });

  const [workExp , setWorkExp] = useState([]);
  //console.log(workData)
  function handleAddworkExp () {
    
    setWorkExp(currentWorkExp => {
      return[
      ...currentWorkExp,
    { id: crypto.randomUUID(), object: workData }
    ]});

    setWorkData({
      position: "",
      company: "",
      startDate: "",
      endDate: ""
    });
  }

  

  const [educationData, setEducationData] = useState({
     university:"",
     degree:"",
     startDate:"",
     endDate:""
  });

  const handlePersonalDataChange = (name, value) => {
    setPersonalData({ ...personalData, [name]: value });
  };
  const handleWorkData=(name, value) =>{
    setWorkData({...workData, [name]: value});
  }
  
  const handleEducationDate=(name, value) =>{
    setEducationData({...educationData, [name]: value});
  }
  console.log(workExp)
  return (
    <>
      <div className="header">
        <h1>CV Creator</h1>
      </div>
      <div className="main">
        <div className="inputInfo">
          <PersonalInfo
            personalData={personalData}
            onPersonalDataChange={handlePersonalDataChange}
          />
          <WorkExperienceInfo 
          workData={workData}
          onWorkDataChange={handleWorkData}
          handleAddworkExp={handleAddworkExp} 
          workExp={workExp}
          setWorkExp={setWorkExp}/>
          <EducationInfo
          educationData={educationData} 
          onEducationDataChange={handleEducationDate}/>
        </div>
        <div className="resume">
        <ResumePreview
          personalData={personalData}
          //workData={workData}
          workExp={workExp} 
          educationData={educationData}/>
        </div>
      </div>
      
    </>
  );
}

export default App;
