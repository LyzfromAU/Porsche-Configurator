import React from 'react';
import { useSelector } from 'react-redux';

function Summary(props){
    const car = useSelector(state=>state.car);

    return(
        <div className="col-lg-4 col-md-4 col-sm-12 right-bar">
            <h4 className="title">Summary</h4>
            <div className="d-flex justify-content-between summary-item">
                <div className="summary-sub">{props.data[car.car][car.model].name}</div>
                <div className="summary-sub">{`A$${props.data[car.car][car.model].price}`}</div>
            </div>
            <div className="d-flex justify-content-between summary-item">
                <div className="summary-sub">{props.color[car.car][car.colorIndex].name}</div>
                <div className="summary-sub">{`A$${props.color[car.car][car.colorIndex].price}`}</div>
            </div>
            <div className="d-flex justify-content-between summary-item">
                <div className="summary-sub">{props.wheel[car.car][car.wheel-1].name}</div>
                <div className="summary-sub">{`A$${props.wheel[car.car][car.wheel-1].price}`}</div>
            </div>
            <div className="d-flex justify-content-between summary-item">
                <div className="summary-sub">{props.interior[car.interiorLevel-1][car.interior-1].name}</div>
                <div className="summary-sub">{`A$${props.interior[car.interiorLevel-1][car.interior-1].price}`}</div>
            </div>
            <div className="d-flex justify-content-between summary-item">
                <div className="summary-sub">Total</div>
                <div className="summary-sub">{`A$${props.interior[car.interiorLevel-1][car.interior-1].price
                +props.wheel[car.car][car.wheel-1].price+props.color[car.car][car.colorIndex].price+props.data[car.car][car.model].price}`}</div>
            </div>
        </div>
    );
};

export default Summary;