import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep } from '../actions/changeStep';

function Footer(props){

    const car = useSelector(state=>state.car);
    const step = useSelector(state=>state.step);
    const dispatch = useDispatch();

    function prev(){
        dispatch(changeStep(step-1));  
    };
    function next(){
        dispatch(changeStep(step+1));  
    };

    return(
        <div className="d-flex justify-content-between bg-primary footer align-items-center">
            <div>
                <button className="btn-next" onClick={prev} disabled={step==1?true:false}>
                    <span>Prev</span>
                </button>
            </div>
            <div className="total">
                {props.interior[car.interiorLevel-1][car.interior-1].price
                +props.wheel[car.car][car.wheel-1].price
                +props.color[car.car][car.colorIndex].price
                +props.data[car.car][car.model].price}
            </div>
            <div>
                <button className="btn-next" onClick={next} disabled={step==4?true:false}>
                    <span>Next</span>
                </button>
            </div>
        </div>
    );
};

export default Footer;