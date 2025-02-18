import React from "react";
import "../styles/JobCategory.css";

const jobCategory = [
    { title: "Remote", jobs: 9 },
    { title: "MNC", jobs: 15 },
    { title: "Software and IT", jobs: 32 },
    { title: "Internship", jobs: 12 },
    { title: "Hiring Manager", jobs: 5 },
    { title: "Fortune", jobs: 9 },
    { title: "Supply Chain", jobs: 11 },
    { title: "Startup", jobs: 11 },
    { title: "Fresher", jobs: 18 },
    { title: "Project Management", jobs: 14 },
    { title: "Finance / Banking Jobs", jobs: 1 },
    { title: "Production / Manufacturing Jobs", jobs: 4 },
    { title: "Healthcare Jobs", jobs: 5 },
    { title: "Maintenance Jobs", jobs: 3 },
    { title: "Restaurant / Food Services Jobs", jobs: 2 },
];

const JobCategory = () => {
    return (
        <div className="job-category">
            <h2>
                Find Your Jobs By <span>Categories</span>
            </h2>
            <div className="category-container">
                {jobCategory.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.title}</h3>
                        <p>{category.jobs} Jobs Available</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCategory;
