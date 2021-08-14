import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../actions/changeColor';
import { changeWheel } from '../actions/changeWheel';


function Exterior(props){
    const car = useSelector(state=>state.car);
    const dispatch = useDispatch();
    
    function getColor(n, index){
        if(car.color===n){
            console.log('Nothing happens');
        }else{
            dispatch(changeColor(n, index));
        };
    };
    function getWheel(n){
        if(car.wheel==n){
            console.log('Nothing happens');
        }else{
            dispatch(changeWheel(n));
        };
    };

    return(
            <div className="col-lg-4 col-md-4 col-sm-12 right-bar">
                <h4 className="title">Select Color</h4>
                <div className="color-btn-container">
                    {props.color[car.car].map((item, index)=>{
                        return(<button className={`color-btn btn-${item.color}`} onClick={()=>getColor(item.color, index)}></button>)
                    })}    
                </div>
                <div className="d-flex justify-content-between color-description">
                    <div>{props.color[car.car][car.colorIndex].name}</div>
                    <div className="color-price-offset">{`A$${props.color[car.car][car.colorIndex].price}`}</div>
                </div>
                <h4 className="title">Select Wheel</h4>
                <div className="color-btn-container">
                    {props.wheel[car.car].map((item, index)=>{
                        return(<button className="wheel-btn" onClick={()=>getWheel(index+1)} style={{backgroundImage: `url('/images/${car.car}/${index+1}.PNG')`}}>
                        </button>)
                    })}    
                </div>
                <div className="d-flex justify-content-between color-description">
                    <div>{props.wheel[car.car][car.wheel-1].name}</div>
                    <div className="color-price-offset">{`A$${props.wheel[car.car][car.wheel-1].price}`}</div>
                </div>
            </div>
    );
};

export default Exterior;