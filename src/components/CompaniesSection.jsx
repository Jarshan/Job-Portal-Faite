import React from "react";
import "../styles/CompaniesSection.css"; // Create a CSS file for styling

const CompaniesSection = () => {
  const topCompanies = [
    { title: "MNCs", hiring: "2.1K+", logos: ["logo1.png", "logo2.png", "logo3.png"] },
    { title: "Edtech", hiring: "151", logos: ["logo4.png", "logo5.png", "logo6.png"] },
    { title: "Healthcare", hiring: "590", logos: ["logo7.png", "logo8.png", "logo9.png"] },
    { title: "Unicorns", hiring: "97", logos: ["logo10.png", "logo11.png", "logo12.png"] }
  ];

  const featuredCompanies = [
    { name: "Datamatics", rating: 3.5, reviews: "2K+", description: "Global digital solutions & technology company", logo: "logo13.png" },
    { name: "Jio", rating: 3.9, reviews: "2.3K+", description: "True 5G is here to unlock the limitless era.", logo: "logo14.png" },
    { name: "Empower", rating: 3.8, reviews: "272", description: "We’re a financial services company.", logo: "logo15.png" },
    { name: "JP Morgan", rating: 4.0, reviews: "6K+", description: "Leader in financial services.", logo: "logo16.png" }
  ];

  return (
    <div className="companies-section">
      <h2>Top Companies Hiring Now</h2>
      <div className="top-companies">
        {topCompanies.map((company, index) => (
          <div key={index} className="company-card">
            <h3>{company.title}</h3>
            <p>{company.hiring} are actively hiring</p>
            <div className="company-logos">
              {company.logos.map((logo, i) => (
                <img key={i} src={logo} alt={company.title} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>Featured Companies Actively Hiring</h2>
      <div className="featured-companies">
        {featuredCompanies.map((company, index) => (
          <div key={index} className="featured-card">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h3>{company.name}</h3>
            <p>⭐ {company.rating} ({company.reviews} reviews)</p>
            <p>{company.description}</p>
            <button className="view-jobs">View Jobs</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
