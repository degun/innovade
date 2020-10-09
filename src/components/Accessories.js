import React from "react";
import Tridi from 'react-tridi';
import 'react-tridi/dist/index.css';

const Accessories = () => {

    return <div className="Accessories__wrapper" id="Accessories">
        <div className="Unique__title">
            UNIQUE
        </div>
        <div className="Unique_product">
            <Tridi 
                location={`./3d`} 
                format="png" 
                count="180" 
                draggable
                dragInterval={10}
                autoplay
                stopAutoplayOnMouseEnter
                resumeAutoplayOnMouseLeave
                autoplaySpeed={150}
            />
        </div>
        <div className="Unique_description">
            <img src={require("../photos/Group 59@2x.png")} alt="Unique description" />
        </div>
        <img className="threesixty" src={require("../photos/360@2x.png")} />
    </div>
};

export default Accessories;
 