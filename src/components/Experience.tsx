
interface Experience {
    year: number;
    description: string;
}
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
