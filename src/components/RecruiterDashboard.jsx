import { useState } from "react";
import CandidateCard from "./CandidateCard";
import "../styles/RecruiterDashboard.css";

const mockCandidates = [
  { fullName: "John Doe", experience: "5", jobPreference: "Software Engineer", skills: "React, Node.js", education: "BSc Computer Science" },
  { fullName: "Jane Smith", experience: "3", jobPreference: "Data Scientist", skills: "Python, ML, SQL", education: "MSc Data Science" },
];

const RecruiterDashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="recruiter-dashboard">
      <input type="text" placeholder="Search by Job Position..." onChange={(e) => setSearch(e.target.value)} />
      {mockCandidates.filter((c) => c.jobPreference.toLowerCase().includes(search.toLowerCase()))
        .map((candidate, index) => <CandidateCard key={index} candidate={candidate} />)}
    </div>
  );
};

export default RecruiterDashboard;
