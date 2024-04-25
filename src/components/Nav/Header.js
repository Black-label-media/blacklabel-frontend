import React from "react";
import blaPhoto from "../../visuals/1.png";
import '../Styling/header.css';

const HeaderComp = () => {
    return (
        <>
        <img src={blaPhoto} alt="bla photo" />
        <h1 className="h1-header">Heres the header</h1>
        </>
    );
};

export default HeaderComp;