import "./Personal.scss";
import {CvPersonal} from "../../types/cv.ts";

type Props = {
    personal: CvPersonal;
};
export const Personal = (props: Props) => {
    const {name,lastName,position,photo} = props.personal;
    return (
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={photo} alt={`${name} ${lastName} profile photo`}/>
            <p>{name} {lastName}</p>
            <small>{position}</small>
        </aside>
    );
};