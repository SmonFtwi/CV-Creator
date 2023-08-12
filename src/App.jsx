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

  const handlePersonalDataChange = (name, value) => {
    setPersonalData({ ...personalData, [name]: value });
  };

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
          <WorkExperienceInfo />
          <EducationInfo />
        </div>
        <div className="resume">
          <ResumePreview
          personalData={personalData}/>
        </div>
      </div>
    </>
  );
}

export default App;
