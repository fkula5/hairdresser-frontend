import {useState} from 'react';

const HairDressers = ()=>{
    const [employees, setHairdresser]= useState([
        {name: 'Jan', secondName: 'Kowalski', service: 'service_1', id:1},
        {name: 'Adam', secondName: 'Nowak', service: 'service_2', id:2},
        {name: 'Anna', secondName: 'Dąbrowska', service: 'service_3', id:3}
    ]);
    return(
        <div className="hairdressers">
            <h2>Our hairdressers: </h2>
            {employees.map((hairdressers)=>(
                <div className="hairdressers-preview" key={hairdressers.id}>
                <h2>{hairdressers.name}</h2>
                <h2>{hairdressers.secondName}</h2>
                <p>Service: {hairdressers.service}</p>
                <button>Book an appointment</button>
                </div>
            ))}
        </div>
    );
}

export default HairDressers;