import React from 'react';
import ReactDOM from 'react-dom/client';
import {CV} from "./components/CV";
import './style.scss';
// import {ManyValues} from "./components/ManyValues/ManyValues.tsx";
// import {Foo} from "./components/Foo/Foo.tsx";
// import {Parent} from "./components/Foo/Parent.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CV />
      {/*<ManyValues first={1} second={2} third={3} fourth={4} fifth={5} sixth={6} seventh={7} />*/}
    {/*<Foo elements={[*/}
    {/*    {id: 1, value: "Lorem Ipsum"},*/}
    {/*    {id: 2, value: "Dolor Sit"},*/}
    {/*    {id: 3, value: "Amet Dolores"},*/}
    {/*]}/>*/}
    {/*  <Parent />*/}
  </React.StrictMode>,
)
