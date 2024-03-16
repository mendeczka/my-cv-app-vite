import "./Header.scss";
import {CvHeader} from "../../types/cv.ts";

type Props = {
    name: CvHeader;
};
export const Header = (props: Props) => {
    return (
        <header className='cv-header'>
            <h1>CV {props.name.name} {props.name.lastName}</h1>
        </header>
    );
};