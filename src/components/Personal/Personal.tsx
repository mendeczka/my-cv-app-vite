import "./Personal.scss";

type Props = {
    name: string;
    lastName: string;
    photo: string;
    position: string;
};
export const Personal = (props: Props) => {
    return (
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={props.photo} alt={`${props.name} ${props.lastName} profile photo`}/>
            <p>{props.name} {props.lastName}</p>
            <small>{props.position}</small>
        </aside>
    );
};