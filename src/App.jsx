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
          onWorkDataChange={handleWorkData} />
          <EducationInfo
          educationData={educationData} 
          onEducationDataChange={handleEducationDate}/>
        </div>
        <div className="resume">
          <ResumePreview
          personalData={personalData}
          workData={workData}
          educationData={educationData}/>
        </div>
      </div>
    </>
  );
}

export default App;
