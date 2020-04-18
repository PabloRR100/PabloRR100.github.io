import React from 'react';

import Hero from '../components/Hero';
import Carrusel from '../components/Carrusel';


function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carrusel />
        </div>
    );
}
 
export default HomePage;