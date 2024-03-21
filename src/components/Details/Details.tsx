import {H2Component} from "../H2Component.tsx";
import { CvDetails, CvH2Enum} from "../../types/cv.ts";
import "./Details.scss";

type Props ={
    details: CvDetails;
};
export const Details = ({details}: Props) => {

    return (
        <section className='cv-details'>
            <H2Component name={CvH2Enum.Experience}/>
            {/*<ExperienceD data={cvData.experience}/>*/}
            <ul>
                {details.experience.map((experience, index) => (
                    <li key={index}>
                        <strong>{experience.year}</strong> - {experience.description}
                    </li>
                ))}
            </ul>
            <H2Component name={CvH2Enum.Education}/>
            <ul>
                {details.education.map((edu, i) => (
                    <li key={i}>
                        {edu}
                    </li>
                ))}
            </ul>
        </section>
    );
};