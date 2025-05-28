import React, { useState } from 'react';
import Boton from "../components/Boton";

const Home = () => {
    const [count, setCount] = useState(0);

    const suma = () => {
        setCount(count + 1);
    };
    const resta = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1>Mi app en React {count}</h1>
            <Boton onclick={suma} texto="suma"></Boton>
            <Boton onclick={resta} texto="resta"></Boton>
            <Boton texto="mensaje"></Boton>
            <Boton texto="guardar"></Boton>
        </div>
    );
};

export default Home;
