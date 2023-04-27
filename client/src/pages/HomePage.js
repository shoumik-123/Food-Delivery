import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const HomePage = () => {
    return (
        <div>
            <div><Nav/></div>
            <div><Carousel/></div>
            <div><Card/></div>
            <div><Footer/></div>
        </div>
    );
};

export default HomePage;