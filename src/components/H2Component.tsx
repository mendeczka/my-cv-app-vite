// import React from 'react';

interface Props {
    name: string;
}

export const H2Component = (props: Props) => {
    return (
        <h2>{props.name}</h2>
    );
};