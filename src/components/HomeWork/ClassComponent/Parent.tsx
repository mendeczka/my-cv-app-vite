import {Component} from 'react';
import Child from "./Child.tsx";

class Parent extends Component {
    render() {
        return (
            <>
                <h2>
                    I am a father.
                </h2>
                <Child/>
            </>
        );
    }
}

export default Parent;