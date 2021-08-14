import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCar } from '../actions/changeCar';
import { changeModel } from '../actions/changeModel';

function Car(props){

    const car = useSelector(state=>state.car);
    const theme = useSelector(state=>state.theme);
    const dispatch = useDispatch();
    function getCar(n){
        if(car.car==n){
            console.log('Nothing happens');
        }else{
            dispatch(changeCar(n));
        };
    };
    function getModel(n){
        if(car.model==n){
            console.log('Nothing happens');
        }else{
            dispatch(changeModel(n));
        };
    };

    return(
            <div className="col-lg-4 col-md-4 col-sm-12 right-bar">
                <h4 className="title">Select Car</h4>
                <div className="btns-container">
                    <button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>getCar(0)}>718 Cayman</button>
                    <button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>getCar(1)}>911 Carrera</button>
                    <button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>getCar(2)}>Panamera</button>
                </div>
                <h4 className="title">Select Model</h4>
                <div className="btns-container">
                    {props.data[car.car].map((item, index)=>{
                        return(<button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>getModel(index)}>{item.name}</button>)
                    })}
                </div>
                <p className="para">There's a reason Porsche injects endorphins into everyday life. 
                    It is characterised by the typical Porsche dynamics with powerful, 
                    high-reviving engines as well as excellent power distribution 
                    from the all-wheel drive system and outstanding handling, 
                    made even more precise by the systems available to it.</p>
            </div>
    );
};

export default Car;