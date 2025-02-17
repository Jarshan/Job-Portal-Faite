


// import React, { useState } from 'react';
// import "../styles/RecruiterDashboard.css"; // Import the CSS file

// const RecruiterDashboard = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [candidates, setCandidates] = useState([

//     {
//       id: 1,
//       fullName: 'Mohamed Jarshan',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'Faite, Software Engineer ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 2,
//       fullName: 'Ravi',
//       experience: 5,
//       skills: ['React', 'Node.js'],
//       employmenthistory: 'RNR Solution, Frontend Developer ',
//       EducationalQualification: 'Bsc Computing',
//       desiredJob: 'Frontend Developer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 3,
//       fullName: 'Jane Smith',
//       experience: 3,
//       skills: ['Python', 'Data Analysis'],
//       employmenthistory: 'Global, Data scientist ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Data Scientist',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 4,
//       fullName: 'Mohamed Jarshan',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'WSO2, Frontend Developer ',
//       EducationalQualification: 'Bsc Maths',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },

//     {
//       id: 5,
//       fullName: 'Kumar',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'IFS, Full Stack Developer ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },

//     {
//       id: 6,
//       fullName: 'Nilakshan',
//       experience: 6,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'IFS, Full Stack Developer ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Data Scientist',
//       cvUrl: '/path/to/cv.pdf',
//     },

//     {
//       id: 7,
//       fullName: 'Sanjayan',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'WSO2, Frontend Developer ',
//       EducationalQualification: 'Bsc Maths',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },

//     {
//       id: 8,
//       fullName: 'Akshanyan',
//       experience: 3,
//       skills: ['Python', 'Data Analysis'],
//       employmenthistory: 'Global, Data scientist ',
//       EducationalQualification: 'Bsc Software Engineer',
//       desiredJob: 'Data Scientist',
//       cvUrl: '/path/to/cv.pdf',
//     },

   
    
//   ]);

//   const filteredCandidates = candidates.filter((candidate) =>
//     candidate.desiredJob.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="recruiter-dashboard">
//       <h1>Recruiter Dashboard</h1>
//       <input
//         type="text"
//         className="search-bar"
//         placeholder="Search by job position..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       <div className="candidates-container">
//         {filteredCandidates.map((candidate) => (
//           <div key={candidate.id} className="candidate-card">
//             <h3>{candidate.fullName}</h3>
//             <p>Experience: {candidate.experience} years</p>
//             <p>Employment History: {candidate.employmenthistory}</p>
//             <p>Skills: {candidate.skills.join(', ')}</p>
//             <p>Educational Qualification: {candidate.EducationalQualification}</p>
//             <p>Desired Job: {candidate.desiredJob}</p>
            
//             <a href={candidate.cvUrl} download className="cv-download-btn">Download CV</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecruiterDashboard;


// import React, { useState } from 'react';
// import "../styles/RecruiterDashboard.css"; // Import the CSS file

// const RecruiterDashboard = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const candidates = [
//     {
//       id: 1,
//       fullName: 'Mohamed Jarshan',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'Faite, Software Engineer ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 2,
//       fullName: 'Ravi',
//       experience: 5,
//       skills: ['React', 'Node.js'],
//       employmenthistory: 'RNR Solution, Frontend Developer ',
//       EducationalQualification: 'Bsc Computing',
//       desiredJob: 'Frontend Developer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 3,
//       fullName: 'Jane Smith',
//       experience: 3,
//       skills: ['Python', 'Data Analysis'],
//       employmenthistory: 'Global, Data scientist ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Data Scientist',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 4,
//       fullName: 'Mohamed Jarshan',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'WSO2, Frontend Developer ',
//       EducationalQualification: 'Bsc Maths',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 5,
//       fullName: 'Kumar',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'IFS, Full Stack Developer ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 6,
//       fullName: 'Nilakshan',
//       experience: 6,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'IFS, Full Stack Developer ',
//       EducationalQualification: 'Bsc Science',
//       desiredJob: 'Data Scientist',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 7,
//       fullName: 'Sanjayan',
//       experience: 1,
//       skills: ['Laravel', 'MERN'],
//       employmenthistory: 'WSO2, Frontend Developer ',
//       EducationalQualification: 'Bsc Maths',
//       desiredJob: 'Software Engineer',
//       cvUrl: '/path/to/cv.pdf',
//     },
//     {
//       id: 8,
//       fullName: 'Akshanyan',
//       experience: 3,
//       skills: ['Python', 'Data Analysis'],
//       employmenthistory: 'Global, Data scientist ',
//       EducationalQualification: 'Bsc Software Engineer',
//       desiredJob: 'Data Scientist',
//       cvUrl: '/path/to/cv.pdf',
//     }
//   ];

//   const filteredCandidates = candidates.filter((candidate) =>
//     candidate.desiredJob.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="recruiter-dashboard">
//       <h1>Recruiter Dashboard</h1>
      
//       {/* Centered Search Bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search by job position..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="candidates-container">
//         {filteredCandidates.map((candidate) => (
//           <div key={candidate.id} className="candidate-card">
//             <h3>{candidate.fullName}</h3>
//             <p>Experience: {candidate.experience} years</p>
//             <p>Employment History: {candidate.employmenthistory}</p>
//             <p>Skills: {candidate.skills.join(', ')}</p>
//             <p>Educational Qualification: {candidate.EducationalQualification}</p>
//             <p>Desired Job: {candidate.desiredJob}</p>
//             <a href={candidate.cvUrl} download className="cv-download-btn">Download CV</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecruiterDashboard;


import React, { useState } from 'react';
import "../styles/RecruiterDashboard.css"; // Import the CSS file

const RecruiterDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const candidates = [
    {
      id: 1,
      fullName: 'Mohamed Jarshan',
      experience: 1,
      skills: ['Laravel', 'MERN'],
      employmenthistory: 'Faite, Software Engineer ',
      EducationalQualification: 'Bsc Science',
      desiredJob: 'Software Engineer',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 2,
      fullName: 'Ravi',
      experience: 5,
      skills: ['React', 'Node.js'],
      employmenthistory: 'RNR Solution, Frontend Developer ',
      EducationalQualification: 'Bsc Computing',
      desiredJob: 'Frontend Developer',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 3,
      fullName: 'Jane Smith',
      experience: 3,
      skills: ['Python', 'Data Analysis'],
      employmenthistory: 'Global, Data scientist ',
      EducationalQualification: 'Bsc Science',
      desiredJob: 'Data Scientist',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 4,
      fullName: 'Mohamed Jarshan',
      experience: 1,
      skills: ['Laravel', 'MERN'],
      employmenthistory: 'WSO2, Frontend Developer ',
      EducationalQualification: 'Bsc Maths',
      desiredJob: 'Software Engineer',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 5,
      fullName: 'Kumar',
      experience: 1,
      skills: ['Laravel', 'MERN'],
      employmenthistory: 'IFS, Full Stack Developer ',
      EducationalQualification: 'Bsc Science',
      desiredJob: 'Software Engineer',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 6,
      fullName: 'Nilakshan',
      experience: 6,
      skills: ['Laravel', 'MERN'],
      employmenthistory: 'IFS, Full Stack Developer ',
      EducationalQualification: 'Bsc Science',
      desiredJob: 'Data Scientist',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 7,
      fullName: 'Sanjayan',
      experience: 1,
      skills: ['Laravel', 'MERN'],
      employmenthistory: 'WSO2, Frontend Developer ',
      EducationalQualification: 'Bsc Maths',
      desiredJob: 'Software Engineer',
      cvUrl: '/path/to/cv.pdf',
    },
    {
      id: 8,
      fullName: 'Akshanyan',
      experience: 3,
      skills: ['Python', 'Data Analysis'],
      employmenthistory: 'Global, Data scientist ',
      EducationalQualification: 'Bsc Software Engineer',
      desiredJob: 'Data Scientist',
      cvUrl: '/path/to/cv.pdf',
    }
  ];

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.desiredJob.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recruiter-dashboard">
      <h1>Recruiter Dashboard</h1>
      
      {/* Centered Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by job position..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="candidates-container">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <h3>{candidate.fullName}</h3>
            <p>Experience: {candidate.experience} years</p>
            <p>Employment History: {candidate.employmenthistory}</p>
            <p>Skills: {candidate.skills.join(', ')}</p>
            <p>Educational Qualification: {candidate.EducationalQualification}</p>
            <p>Desired Job: {candidate.desiredJob}</p>
            <a href={candidate.cvUrl} download className="cv-download-btn">Download CV</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterDashboard;
