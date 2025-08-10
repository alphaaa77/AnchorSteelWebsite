import React, { useState } from 'react';
import '../components/CSS files/Services.css';
import '../App.css';

const serviceData = [
  {
    title: "Steel Fabrication",
    summary: "Precision fabrication using industry-grade machinery.",
    details: "Our team handles all custom steel shapes and bar types with strict quality control and compliance to Australian standards."
  },
  {
    title: "Cutting & Bending",
    summary: "Accurate steel cutting and bending services.",
    details: "We use high-grade machines to cut and bend steel to your specifications. Perfect for slabs, columns, and beams."
  },
  {
    title: "Onsite Delivery",
    summary: "Reliable delivery to your job site.",
    details: "Prompt and reliable steel delivery across the region, including last-minute requests and full project schedules."
  },
  {
    title: "Project Consultation",
    summary: "Talk with our team for custom projects.",
    details: "We assist you with takeoffs, planning, scheduling, and quoting — no matter the project size."
  }
];

function Services() {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <div className="section">
      <header className="services-animated-header">
        <div className="services-header-overlay">
          <h1>Our Services</h1>
          <p>Explore what we can offer</p>
        </div>
      </header>

      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index} onClick={() => toggleCard(index)}>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            {openCardIndex === index && (
              <div className="service-details">
                <p>{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
