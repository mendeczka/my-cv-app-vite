import {H2Component} from "../H2Component.tsx";
import {CvData} from "../../types/cv.ts";
import "./Details.scss";

type Props ={
    details: CvData;
};
export const Details = (props: Props) => {

    return (
        <section className='cv-details'>
            <H2Component name="Experience"/>
            {/*<ExperienceD data={cvData.experience}/>*/}
            <ul>
                {props.details.experience.map((experience, index) => (
                    <li key={index}>
                        <strong>{experience.year}</strong> - {experience.description}
                    </li>
                ))}
            </ul>
            <H2Component name="Education"/>
            <ul>
                {props.details.education.map((edu, i) => (
                    <li key={i}>
                        {edu}
                    </li>
                ))}
            </ul>
        </section>
    );
};