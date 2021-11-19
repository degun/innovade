import React from "react";
import Tridi from 'react-tridi';
import 'react-tridi/dist/index.css';
import './Accessories.scss';

const Accessories = () => {

    return <div className="Accessories__wrapper" id="Accessories">
        <div className="Unique__title">
            UNIQUE
        </div>
        <div className="Unique_product">
            <Tridi 
                location="./4d"
                format="png" 
                count="180" 
                draggable
                autoplay
                stopAutoplayOnMouseEnter
                resumeAutoplayOnMouseLeave
                autoplaySpeed={140}
            />
        </div>
        <div className="Unique_description">
            <img src={require("../../../photos/Group 59@2x.png")} alt="Unique description" />
        </div>
        <img className="threesixty" alt="Shisha shown rotating in 360 degrees" src={require("../../../photos/360@2x.png")} />
    </div>
};

export default Accessories;
 