import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep } from '../actions/changeStep';
import { changeTheme } from '../actions/changeTheme';

function Menu() {

  const dispatch = useDispatch();
  const step = useSelector(state=>state.step);
  const theme = useSelector(state=>state.theme);
  function getStep(n){
    if(step==n){
      console.log('Nothing happens');
    }else{
      dispatch(changeStep(n));
    };
  };
  function getTheme(){
    theme==='dark'?dispatch(changeTheme('light')):dispatch(changeTheme('dark'));
  }

  const ModeIcon = theme==='dark' ? FaSun : FaMoon;
  return (
    <div className="menu-container">
      <img src="/images/porsche.png" alt="logo" height="65px" className="menu-img"/>
      <div className={step==1?"menu-nav-active":"menu-nav"} onClick={()=>getStep(1)}>1. Car</div>
      <div className={step==2?"menu-nav-active":"menu-nav"} onClick={()=>getStep(2)}>2. Exterior</div>
      <div className={step==3?"menu-nav-active":"menu-nav"} onClick={()=>getStep(3)}>3. Interior</div>
      <div className={step==4?"menu-nav-active":"menu-nav"} onClick={()=>getStep(4)}>4. Summary</div>
      <ModeIcon className="mode-icon" onClick={getTheme}/>
    </div>
  );
}

export default Menu;
