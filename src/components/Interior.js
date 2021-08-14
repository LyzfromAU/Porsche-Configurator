import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInt } from '../actions/changeInt';


function Interior(props){
    const car = useSelector(state=>state.car);
    const theme = useSelector(state=>state.theme);
    const dispatch = useDispatch();

    function getInt(n, index){
        if(car.interiorLevel==n && car.interior==index){
            console.log('Nothing happens');
        }else{
            dispatch(changeInt(n, index));
        };
    }

    return(
        <div className="col-lg-4 col-md-4 col-sm-12 right-bar">
            <h4 className="title">Standard Interior</h4>
            <div className="btns-container">
                {props.interior[0].map((item, index)=>{ return(<button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>{getInt(1, index+1)}}>{item.color}</button>)})}
            </div>
            <h4 className="title">Standard Leather Package</h4>
            <div className="btns-container">
                {props.interior[1].map((item, index)=>{ return(<button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>{getInt(2, index+1)}}>{item.color}</button>)})}
            </div>
            <h4 className="title">Leather Interior</h4>
            <div className="btns-container">
                {props.interior[2].map((item, index)=>{ return(<button className={theme==='dark'?"btns-dark":"btns"} onClick={()=>{getInt(3, index+1)}}>{item.color}</button>)})}
            </div>
        </div>
    );
};

export default Interior;