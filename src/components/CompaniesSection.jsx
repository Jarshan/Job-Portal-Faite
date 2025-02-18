import React from "react";
import "../styles/CompaniesSection.css";

const CompaniesSection = () => {
  const topCompanies = [
    { title: "MNCs", hiring: "2.1K+", logos: ["Images/Pic5.png"] },
    { title: "Edtech", hiring: "151", logos: ["Images/Pic6.png"] },
    { title: "Healthcare", hiring: "590", logos: ["Images/Pic7.png"] },
    { title: "Unicorns", hiring: "97", logos: ["Images/Pic8.png"] },
    { title: "Startups", hiring: "517", logos: ["Images/Pic12.png"] }
  ];

  const featuredCompanies = [
    { name: "Genpact", rating: 3.5, reviews: "2K+", description: "Global digital solutions & technology company", logo: "Images/Pic4.png" },
    { name: "Apple", rating: 3.9, reviews: "2.3K+", description: "True 5G is here to unlock the limitless era.", logo: "Images/Pic9.png" },
    { name: "Avalara Technologies", rating: 3.8, reviews: "272", description: "We’re a financial services company.", logo: "Images/Pic10.png" },
    { name: "Reliance Retail", rating: 4.0, reviews: "6K+", description: "Leader in financial services.", logo: "Images/Pic11.png" }
  ];

  return (
    <div className="companies-section">
      <h2>Top Companies   <span>Hiring Now</span></h2>
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

      <h2>Featured Companies <span>Actively Hiring</span></h2>
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
