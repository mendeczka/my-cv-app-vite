import "./Header.scss";
import {CvHeader} from "../../types/cv.ts";

type Props = {
    data: CvHeader;
};
export const Header = (props: Props) => {
    const {name, lastName} = props.data;
    return (
        <header className='cv-header'>
            <h1>CV {name} {lastName}</h1>
        </header>
    );
};