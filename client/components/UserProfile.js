import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { fetchSelectedSprite } from "../store/fetchSelectedSprite";
import ProgressBar from "./ProgressBar";
import { fetchUserStats } from "../store/userStats";

const UserProfile = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);


  useEffect(()=>{
    dispatch(fetchSelectedSprite());
}, []);

useEffect(()=>{
  dispatch(fetchUserStats());
}, [])
 
  const [frame, setFrame] = useState(0);
  let [counter, setCounter] = useState(1);
  

  const user = useSelector((state) => state.singleUser);
  const username = useSelector((state) => state.auth.username);
  const spriteName = useSelector((state) =>  state.userSelectedSprite);
  const userStats = useSelector((state) => state.userStats);
  const {level, currentWeight} = userStats;
  const percentage = (lvl, cw)=>{
    if(lvl === 1 && cw === 0){
      return 0;
    }else if(lvl === 1 && cw !== 0){
      return Math.floor((cw / 1000) * 100)
    }else if(lvl === 2){
      return Math.floor((cw / 2500) * 100)
    }else if(lvl === 3){
      return Math.floor((cw / 5000) * 100)
    }else if(lvl === 4){
      return Math.floor((cw / 8000) * 100)
    }else if(lvl === 5){
      return Math.floor((cw / 12000) * 100)
    }else if(lvl === 6){
      return Math.floor((cw / 16000) * 100)
    }else if(lvl === 7){
      return Math.floor((cw / 20000) * 100)
    }else if(lvl === 8){
      return Math.floor((cw / 25000) * 100)
    }else if(lvl === 9){
      return Math.floor((cw / 30000) * 100)
    }else if(lvl === 10){
      return Math.floor((cw / 35000) * 100)
    }else if(lvl === 11){
      return Math.floor((cw / 40000) * 100)
    }else if(lvl === 12){
      return Math.floor((cw / 50000) * 100)
    }else if(lvl === 13){
      return Math.floor((cw / 60000) * 100)
    }else if(lvl === 14){
      return Math.floor((cw / 75000) * 100)
    }else if(lvl === 15){
      return Math.floor((cw / 100000) * 100)
    }else if(lvl === 16){
      return Math.floor((cw / 125000) * 100)
    }else if(lvl === 17){
      return Math.floor((cw / 150000) * 100)
    }else if(lvl === 18){
      return Math.floor((cw / 175000) * 100)
    }else if(lvl === 19){
      return Math.floor((cw / 200000) * 100)
    }else if(lvl === 20){
      return Math.floor((cw / 250000) * 100)
    }else if(lvl === 21){
      return Math.floor((cw / 300000) * 100)
    }else if(lvl === 22){
      return Math.floor((cw / 350000) * 100)
    }else if(lvl === 23){
      return Math.floor((cw / 400000) * 100)
    }else if(lvl === 24){
      return Math.floor((cw / 500000) * 100)
    }else if(lvl === 25){
      return Math.floor((cw / 600000) * 100)
    }else if(lvl === 26){
      return Math.floor((cw / 700000) * 100)
    }else if(lvl === 27){
      return Math.floor((cw / 800000) * 100)
    }else if(lvl === 28){
      return Math.floor((cw / 900000) * 100)
    }else if(lvl === 29){
      return Math.floor((cw / 1000000) * 100)
    }else if(lvl === 30){
      return Math.floor((cw / 1100000) * 100)
    }else if(lvl === 31){
      return Math.floor((cw / 1200000) * 100)
    }else if(lvl === 32){
      return Math.floor((cw / 1300000) * 100)
    }else if(lvl === 33){
      return Math.floor((cw / 1400000) * 100)
    }else if(lvl === 34){
      return Math.floor((cw / 1500000) * 100)
    }else if(lvl === 35){
      return Math.floor((cw / 1600000) * 100)
    }else if(lvl === 36){
      return Math.floor((cw / 1700000) * 100)
    }else if(lvl === 37){
      return Math.floor((cw / 1800000) * 100)
    }else if(lvl === 38){
      return Math.floor((cw / 1900000) * 100)
    }else if(lvl === 39){
      return Math.floor((cw / 2000000) * 100)
    }else if(lvl === 40){
      return Math.floor((cw / 2100000) * 100)
    }else if(lvl === 41){
      return Math.floor((cw / 2200000) * 100)
    }else if(lvl === 42){
      return Math.floor((cw / 2300000) * 100)
    }else if(lvl === 43){
      return Math.floor((cw / 2400000) * 100)
    }else if(lvl === 44){
      return Math.floor((cw / 2500000) * 100)
    }else if(lvl === 45){
      return Math.floor((cw / 2600000) * 100)
    }else if(lvl === 46){
      return Math.floor((cw / 2700000) * 100)
    }else if(lvl === 47){
      return Math.floor((cw / 2800000) * 100)
    }else if(lvl === 48){
      return Math.floor((cw / 2900000) * 100)
    }else if(lvl === 49){
      return Math.floor((cw / 3000000) * 100)
    }
  };


  const character = [
    `/sprites/${spriteName}/${spriteName}-idle.gif`,
    `/sprites/${spriteName}/${spriteName}-jump.gif`,
    `/sprites/${spriteName}/${spriteName}-run.gif`,
    `/sprites/${spriteName}/${spriteName}-dead.gif`,
  ] || [];


  
  // change character animation on click
  const counterFunc = () => {
    setFrame(counter);
    setCounter(counter + 1);
    if (counter >= 3) {
      setCounter(0);
    }
  };

  const totalWeight = user.totalWeight || [];

  return (
    <>
      <div className="profile-container">
        <h1 className="character-margin">{username}</h1>
        <h3 className="character-margin">Level {user.level}</h3>
      </div>
      <div className="character-container">
        <img
          onClick={() => counterFunc()}
          src={character[frame]}
          className="character"
        />
        <ProgressBar color='yellow' percentage={percentage(level, currentWeight)}/>
        <p className="character-margin">You've lifted a total of:</p>
        <p className="character-margin">
          {totalWeight.toLocaleString("en-US") || 0} lbs
        </p>
        <Link to='/sprites'><button className="progress-btn">View Unlocked Sprites</button></Link>
        <Link to="/login">
          <button className="logout-btn" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserProfile;
