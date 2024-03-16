import './CV.scss';
import {Header} from "../Header/Header.tsx";
import {Personal} from "../Personal/Personal.tsx";
import {Details} from "../Details/Details.tsx";
import {CvData} from "../../types/cv.ts";


const cvData: CvData = {
    photo: 'https://placehold.co/400x400?text=AG',
    name: 'Arek',
    lastName: "Grucha",
    position: 'Kierownik',
    experience: [
        {year: 2016, description: "Admin"},
        {year: 2020, description: "Kierownik"},
        {year: 2023, description: "Kierownik"},
    ],
    education: [
        "Lorem ipsum",
        "Dolor sit amet",
        "Arek ma kota"
    ]

}

export const CV = () => {
    return (
        <main className='cv-main'>
            <Header name={cvData.name} lastName={cvData.lastName}/>
            <Personal lastName={cvData.lastName} name={cvData.name} position={cvData.position} photo={cvData.photo}/>
            <Details details={cvData}/>
        </main>
    );
};