import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExteriorImg from './ExteriorImg';
import Car from './Car';
import Exterior from './Exterior';
import Interior from './Interior';
import Summary from './Summary';


function Content(props){

    const car = useSelector(state=>state.car);
    const step = useSelector(state=>state.step);
    const dispatch = useDispatch();
    
    return(
        <div className="row d-flex">
            {(step==1||step==2||step==4)?<ExteriorImg data={props.data}/>:null}
            {(step==3)?(<div className="col-lg-8 col-md-8 col-sm-12 left-bar">
                <img src={`/images/in/${car.interiorLevel}-${car.interior}.jpg`} alt="car" className="car-img"/>
                <div><span className="performance">{`A$${props.interior[car.interiorLevel-1][car.interior-1].price}`}</span></div>
            </div>):null}
            {step==1?<Car data={props.data}/>:null}
            {step==2?<Exterior color={props.color} wheel={props.wheel}/>:null}
            {step==3?<Interior interior={props.interior}/>:null}
            {step==4?<Summary data={props.data} interior={props.interior} color={props.color} wheel={props.wheel}/>:null}
        </div>

    );
};

export default Content;