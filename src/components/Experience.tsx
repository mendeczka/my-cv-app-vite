import {Experience} from "../types/cv.ts";

interface Props {
    experience: Experience[];
}

export const ExperienceD = (props:Props) => {
    return (
        <ul>
            {props.experience.map((experience, index) => (
                <li key={index}>
                    <strong>{experience.year}</strong> - {experience.description}
                </li>
            ))}
        </ul>
    );
};
