import React from 'react';
import Card from "./Cards";
import Sdata from "./Sdata";

const App=()=>(
    <>
    <h1 className='heading_style'> Top Freelancing Websites </h1>
    {Sdata.map((val)=>(
        <Card 
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link} />
    ))}
    </>);

    export default App;