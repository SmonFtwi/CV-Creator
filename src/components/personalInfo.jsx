/* eslint-disable react/prop-types */

function PersonalInfo({ personalData, onPersonalDataChange }) {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        onPersonalDataChange(name, value);
      };
  return (
    <form className="personalForm" onSubmit={handleSubmit}>
      <h2>Personal Detail</h2>
      <input
        className="firstName"
        type="text"
        required
        name="firstName"
        placeholder="First Name"
        value={personalData.firstName}
        onChange={handleInputChange}
      />

      <input
        className="lastName"
        type="text"
        required
        name="lastName"
        placeholder="Last Name"
        value={personalData.lastName}
        onChange={handleInputChange}
      />

      <input
        className="title"
        type="text"
        required
        name="jobTitle"
        placeholder="Job Title"
        value={personalData.jobTitle}
        onChange={handleInputChange}
      />

      <input
        className="address"
        type="text"
        required
        name="address"
        placeholder="Address"
        value={personalData.address}
        onChange={handleInputChange}
      />

      <input
        className="phoneNumber"
        type="tel"
        required
        name="phoneNumber"
        placeholder="Phone Number"
        value={personalData.phoneNumber}
        onChange={handleInputChange}
      />

      <input
        className="email"
        type="email"
        required
        name="email"
        placeholder="Email"
        value={personalData.email}
        onChange={handleInputChange}
      />
      <div className="saveDelete">
      </div>
    </form>
  );
}


  export default PersonalInfo;