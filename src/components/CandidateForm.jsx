import { useState } from "react";
import "../styles/CandidateForm.css";

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    experience: "",
    company: "",
    position: "",
    skills: "",
    education: "",
    jobPreference: "",
    cv: null,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFormData({ ...formData, cv: e.target.files[0] });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Submit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        {["fullName", "experience", "company", "position", "skills", "education", "jobPreference"].map((field) => (
          <input key={field} type="text" name={field} placeholder={field.replace(/([A-Z])/g, " $1")} onChange={handleChange} required />
        ))}
        <input type="file" name="cv" onChange={handleFileChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CandidateForm;
