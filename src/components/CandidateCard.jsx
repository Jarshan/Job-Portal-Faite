

const CandidateCard = ({ candidate }) => (
  <div className="candidate-card">
    <h3>{candidate.fullName}</h3>
    <p><strong>Experience:</strong> {candidate.experience} years</p>
    <p><strong>Job Preference:</strong> {candidate.jobPreference}</p>
    <p><strong>Skills:</strong> {candidate.skills}</p>
    <p><strong>Education:</strong> {candidate.education}</p>
  </div>
);

export default CandidateCard;
