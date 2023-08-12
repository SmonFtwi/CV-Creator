/* eslint-disable react/prop-types */



function ResumePreview({personalData}) {
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
    </>
  );
}




export default ResumePreview;
