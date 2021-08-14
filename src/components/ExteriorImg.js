import React from 'react';
import { useSelector } from 'react-redux';

function ExteriorImg(props){
    const car = useSelector(state=>state.car);
    return(
        <div className="col-lg-8 col-md-8 col-sm-12 left-bar">
            <img src={`/images/${car.car}/${car.color}-t${car.wheel}.jpg`} alt="car" className="car-img"/>
            <div><span className="performance">{`Top speed: ${props.data[car.car][car.model].max}km/h`}</span></div>
            <div><span className="performance">{`ACC 0-100: ${props.data[car.car][car.model].acceleration}s`}</span></div>
            <div><span className="performance">{`Starting from: A$${props.data[car.car][car.model].price}`}</span></div>
        </div>
    );
};

export default ExteriorImg;