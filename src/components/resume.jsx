/* eslint-disable react/prop-types */



function ResumePreview({personalData, workExp, educationData}) {
  return (
    <>
     <div className="personalInfo">
          <div className="nameJob">
          <h1> {personalData.firstName} {" "} {personalData.lastName}</h1>
          <p> {personalData.jobTitle} </p>
          </div>
          <div className="contactInfo">
          <h3>Personal Details</h3>
          <p>
          <span className="label">Email Address</span> {personalData.email}
        </p>
        <p>
          <span className="label">Phone Number</span> {personalData.phoneNumber}
        </p>
        <p>
          <span className="label">Address</span> {personalData.address}
        </p>
        </div>
         <div className="profile">
          <h3>Profile</h3>
          <p>{personalData.aboutMe}</p>
         </div>
    </div>

    <div className="workInfo">
      <h3> Work Experience</h3>
      {workExp.map(current => 
      <div className="workDetail" key={current.id}>
        <p>{current.object.position}</p>
        <p>{current.object.company}</p>
        <p>{current.object.startDate} <span className="workTime"></span >{current.object.endDate}</p>
        
      </div>
       
    )}
    
    </div>
   
    <div className="educationInfo">
      <h3> Education</h3>
      <div className="eduDetail">
        <p>{educationData.university}</p>
        <p>{educationData.degree}</p>
        
        <p>{educationData.startDate} <span className="eduTime"></span >{educationData.endDate}</p>
      </div>
    
    </div>
    </>
  );
}




export default ResumePreview;
