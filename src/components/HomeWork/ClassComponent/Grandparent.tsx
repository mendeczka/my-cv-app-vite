import {Component} from 'react';
import Parent from "./Parent.tsx";

class Grandparent extends Component {
    render() {
        return (
            <>
                <h1>
                    I am a grandfather.
                </h1>
                <Parent/>
            </>
        );
    }
}

export default Grandparent;