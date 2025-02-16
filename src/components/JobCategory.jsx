import React from "react";
import "../styles/JobCategory.css";

const jobCategory = [
  { title: "Marketing / Communication Jobs", jobs: 9, icon: "📢" },
  { title: "Sales / Business Development Jobs", jobs: 15, icon: "📊" },
  { title: "Other", jobs: 32, icon: "🔧" },
  { title: "HR / Recruitment Jobs", jobs: 3, icon: "👥" },
  { title: "Accounting / Finance Jobs", jobs: 14, icon: "💼" },
  { title: "Finance / Banking Jobs", jobs: 1, icon: "💰" },
  { title: "Production / Manufacturing Jobs", jobs: 4, icon: "⚙️" },
  { title: "Procurement / Supply Chain Jobs", jobs: 4, icon: "📦" },
  { title: "IT - Software Jobs", jobs: 10, icon: "🤖" },
  { title: "Healthcare Jobs", jobs: 5, icon: "❤️" },
  { title: "Maintenance Jobs", jobs: 3, icon: "🔧" },
  { title: "Restaurant / Food Services Jobs", jobs: 2, icon: "🍽️" },
];

const JobCategory = () => {
  return (
    <div className="job-category">
      <h2>
        Find Your Jobs By <span>Category</span>
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
