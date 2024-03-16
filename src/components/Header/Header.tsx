import "./Header.scss";

type Props = {
    name: string;
    lastName: string;
};
export const Header = (props: Props) => {
    return (
        <header className='cv-header'>
            <h1>CV {props.name} {props.lastName}</h1>
        </header>
    );
};