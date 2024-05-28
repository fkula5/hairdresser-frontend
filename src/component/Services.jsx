import React, { useState } from 'react';
import Grades from './Grades';
import './styles.css';

function Services({setComponent}) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const handleClick = (command) => {
    setComponent(c=>c=command)
}

  return (
    <div className="services">
      <div className="header">
        <h2 className="section-titlesss">Hairdressing Cut&Book     </h2>
        <p>62 Thomas Street, New York, NY 10013        </p>  
        <Grades name="John Doe" />
        <Grades name="Jane Smith" />
        <Grades name="Michael Johnson" />
      </div>
      <div className='hairdressers'>
        {hairdressers.map((hairdresser, index) => (
          <div key={index} className={`hairdresser ${expanded === index ? 'expanded' : ''}`} onClick={() => toggleExpand(index)}>
            <div className="hairdresser-info">
              <p className="name">{hairdresser.name}</p>
              {expanded === index && (
                <div className="details">
                  {hairdresser.services.map((service, i) => (
                    <div key={i} className="service-item">
                      <p>{service.name} - {service.price}</p>
                      <button class="button" onClick={()=>{handleClick("book")}}>Book</button>
                 
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="info">
        <div className='week'>
            <p className="title">Day of the week</p> {/* Dodajemy klasę dla pierwszego <p> */}
            <hr className="line" /> {/* Dodanie linii */}    
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>   
            <hr className="line" /> {/* Dodanie linii */}    
            <p>Phone number</p>     
        </div>
        <div className='hours'>
            <p className="title">Opening hours</p> {/* Dodajemy klasę dla pierwszego <p> */}
            <hr className="line" /> {/* Dodanie linii */}    
            <p>10:00 - 18:00</p>
            <p>10:00 - 18:00</p>
            <p>10:00 - 18:00</p>
            <p>10:00 - 18:00</p>
            <p>10:00 - 18:00</p>
            <p>closed</p>
            <p>closed</p>  
            <hr className="line" /> {/* Dodanie linii */}   
            <p>537 237 042</p>
        </div>
      </div>
    


    </div>
  );
}

const handleNextClick = (serviceName) => {
  // Tutaj możesz dodać logikę obsługi kliknięcia przycisku "Contract"
  console.log(`Kliknięto przycisk "Contract" dla usługi: ${serviceName}`);
};

const hairdressers = [
  {
    name: "John Doe",
    services: [
      { name: "Haircut", price: "$30" },
      { name: "Coloring", price: "$50" }
    ]
  },
  {
    name: "Jane Smith",
    services: [
      { name: "Haircut", price: "$25" },
      { name: "Styling", price: "$35" }
    ]
  },
  {
    name: "Michael Johnson",
    services: [
      { name: "Coloring", price: "$45" },
      { name: "Styling", price: "$40" }
    ]
  }
];

export default Services;
