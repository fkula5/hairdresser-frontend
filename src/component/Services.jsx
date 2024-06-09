import React, { useState } from 'react';
import loca from './loca.png';
import fry1d from './fry1d.png';
import fry2d from './fry2d.png';
import fry3c from './fry3c.png';
import './styles.css';
import Grades from './Grades';
function Services({ setComponent }) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleClick = (command) => {
    setComponent((c) => (c = command));
  };

  return (
    <div className="services">
      <div className="localization">
        <img src={loca} alt="Localization" />
        <p>Localization:</p>
        <p>62 Thomas Street, New York, NY 10013</p>
      </div>
      

      <div className="hairdressers">
        <div className="ourhairdressers">
          <h2>Our hairdressers:</h2>
        </div>
        {hairdressers.map((hairdresser, index) => (
          <div key={index} className={`hairdresser-info ${expanded === index ? 'expanded' : ''}`}>
            <div className="hairdresser-row">
              <img src={hairdresser.image} alt={hairdresser.name} className="hairdresser-image" />
              <div className="hairdresser-details">
                <p className="hairdresser-name">{hairdresser.name}</p>
                <button className="button hairdresser-offer" onClick={() => toggleExpand(index)}>
                  View the offer
                </button>
              </div>
            </div>
            {expanded === index && (
              <div className="details">
                {hairdresser.services.map((service, i) => (
                  <div key={i} className="service-item">
                    <p>
                      {service.name} - {service.price}
                    </p>
                    <button className="button" onClick={() => handleClick('book')}>
                      Book
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="info">
        <div className="week">
          <p className="title">Days of the week</p>
          <hr className="line" />
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
          <hr className="line" />
          <p>Telephone number</p>
        </div>
        <div className="hours">
          <p className="title">Opening hours</p>
          <hr className="line" />
          <p>10 AM - 6 PM</p>
          <p>10 AM - 6 PM</p>
          <p>10 AM - 6 PM</p>
          <p>10 AM - 6 PM</p>
          <p>10 AM - 6 PM</p>
          <p>closed</p>
          <p>closed</p>
          <hr className="line" />
          <p>+1 (212) 555-1234</p>
        </div>
      </div>
      <div className="opinions-header">
      <h2>Opinions of our clients</h2>
      </div>
      <Grades name="Ann Doe" />
      <Grades name="Jane Smith" />
      <Grades name="Michael Johnson" />
    </div>
    
    
  );

  
}

const hairdressers = [
  {
    name: 'Ann Doe',
    image: fry1d,
    services: [
      { name: 'haircut ', price: '$15' },
      { name: 'colourization', price: '$25' },

    ],
  },
  {
    name: 'Jane Smith',
    image: fry2d,
    services: [
      { name: 'haircut ', price: '$15' },
      { name: 'stylization a', price: '$25' },
    ],
  },
  {
    name: 'Michael Johnson',
    image: fry3c,
    services: [
      { name: 'haircut ', price: '$20' },
      { name: 'stylization ', price: '$30' },
    ],
  },
];

export default Services;
