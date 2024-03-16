import "./Personal.scss";
import {CvPersonal} from "../../types/cv.ts";

type Props = {
    personal: CvPersonal;
};
export const Personal = (props: Props) => {
    return (
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={props.personal.photo} alt={`${props.personal.name} ${props.personal.lastName} profile photo`}/>
            <p>{props.personal.name} {props.personal.lastName}</p>
            <small>{props.personal.position}</small>
        </aside>
    );
};