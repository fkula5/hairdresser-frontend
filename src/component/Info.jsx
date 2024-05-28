import React from 'react';
import './styles.css'

function Info() {
  return (
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
  );
}

export default Info;
