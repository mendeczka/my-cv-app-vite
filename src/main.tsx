import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';


interface Experience {
    year: number;
    description: string;
}
interface CvData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    experience: Experience[];
    education: string[];
}

const cvData: CvData = {
    photo: 'https://placehold.co/400x400?text=AG',
    name: 'Arek',
    lastName: "Grucha",
    position: 'Kierownik',
    experience: [
        { year: 2016, description: "Admin"},
        {year: 2020, description: "Kierownik"},
        {year: 2023, description: "Kierownik"},
    ],
    education: [
        "Lorem ipsum",
        "Dolor sit amet",
        "Arek ma kota"
    ]

}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='cv-main'>
        <header className='cv-header'>
            <h1>CV {cvData.name} {cvData.lastName}</h1>
        </header>
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`}/>
            <p>{cvData.name} {cvData.lastName}</p>
            <small>{cvData.position}</small>
        </aside>
        <section className='cv-details'>
            <h2>Experience</h2>
            <ul>
                {cvData.experience.map((experience, index) => (
                    <li key={index}>
                        <strong>{experience.year}</strong>  -  {experience.description}
                    </li>
                ))}
            </ul>
            <h2>Education</h2>
            <ul>
                {cvData.education.map((edu,i) => (
                    <li key={i}>
                        {edu}
                    </li>
                ))}
            </ul>
        </section>
    </main>
  </React.StrictMode>,
)
