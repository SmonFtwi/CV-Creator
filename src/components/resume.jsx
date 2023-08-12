/* eslint-disable react/prop-types */



function ResumePreview({personalData, workData, educationData}) {
  return (
    <>
     <div className="personalInfo">
          <div className="nameJob">
          <h1> {personalData.firstName} {" "} {personalData.lastName}</h1>
          <p> {personalData.jobTitle}</p>
          </div>
          <div className="contactInfo">
          <h2>Personal Details</h2>
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
          
    </div>

    <div className="workInfo">
      <h2> Work Experience</h2>
      <div className="workDetail">
        <p>{workData.position}</p>
        <p>{workData.company}</p>
        
        <p>{workData.startDate} <span className="workTime"></span >{workData.endDate}</p>
      </div>

    </div>
    
    <div className="educationInfo">
      <h2> Education</h2>
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
