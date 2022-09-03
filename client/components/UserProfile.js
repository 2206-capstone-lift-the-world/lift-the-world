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
      cw -= 1000;
      return Math.floor((cw / 2500) * 100)
    }else if(lvl === 3){
      cw -= 2500;
      return Math.floor((cw / 5000) * 100)
    }else if(lvl === 4){
      cw -= 5000;
      return Math.floor((cw / 8000) * 100)
    }else if(lvl === 5){
      cw -= 8000;
      return Math.floor((cw / 12000) * 100)
    }else if(lvl === 6){
      cw -= 12000;
      return Math.floor((cw / 16000) * 100)
    }else if(lvl === 7){
      cw -= 16000;
      return Math.floor((cw / 20000) * 100)
    }else if(lvl === 8){
      cw -= 20000;
      return Math.floor((cw / 25000) * 100)
    }else if(lvl === 9){
      cw -= 25000;
      return Math.floor((cw / 30000) * 100)
    }else if(lvl === 10){
      cw -= 30000;
      return Math.floor((cw / 35000) * 100)
    }else if(lvl === 11){
      cw -= 35000;
      return Math.floor((cw / 40000) * 100)
    }else if(lvl === 12){
      cw -= 40000;
      return Math.floor((cw / 50000) * 100)
    }else if(lvl === 13){
      cw -= 50000;
      return Math.floor((cw / 60000) * 100)
    }else if(lvl === 14){
      cw -=60000;
      return Math.floor((cw / 75000) * 100)
    }else if(lvl === 15){
      cw -=75000;
      return Math.floor((cw / 100000) * 100)
    }else if(lvl === 16){
      cw -=100000;
      return Math.floor((cw / 125000) * 100)
    }else if(lvl === 17){
      cw -=125000;
      return Math.floor((cw / 150000) * 100)
    }else if(lvl === 18){
      cw -=150000;
      return Math.floor((cw / 175000) * 100)
    }else if(lvl === 19){
      cw -=175000;
      return Math.floor((cw / 200000) * 100)
    }else if(lvl === 20){
      cw -=200000;
      return Math.floor((cw / 250000) * 100)
    }else if(lvl === 21){
      cw -=250000;
      return Math.floor((cw / 300000) * 100)
    }else if(lvl === 22){
      cw -=300000;
      return Math.floor((cw / 350000) * 100)
    }else if(lvl === 23){
      cw -=350000;
      return Math.floor((cw / 400000) * 100)
    }else if(lvl === 24){
      cw -=400000;
      return Math.floor((cw / 500000) * 100)
    }else if(lvl === 25){
      cw -=500000;
      return Math.floor((cw / 600000) * 100)
    }else if(lvl === 26){
      cw -=600000;
      return Math.floor((cw / 700000) * 100)
    }else if(lvl === 27){
      cw -=700000;
      return Math.floor((cw / 800000) * 100)
    }else if(lvl === 28){
      cw -=800000;
      return Math.floor((cw / 900000) * 100)
    }else if(lvl === 29){
      cw -=900000;
      return Math.floor((cw / 1000000) * 100)
    }else if(lvl === 30){
      cw -=1000000;
      return Math.floor((cw / 1100000) * 100)
    }else if(lvl === 31){
      cw -=1100000;
      return Math.floor((cw / 1200000) * 100)
    }else if(lvl === 32){
      cw -=1200000;
      return Math.floor((cw / 1300000) * 100)
    }else if(lvl === 33){
      cw -=1300000;
      return Math.floor((cw / 1400000) * 100)
    }else if(lvl === 34){
      cw -=1400000;
      return Math.floor((cw / 1500000) * 100)
    }else if(lvl === 35){
      cw -=1500000;
      return Math.floor((cw / 1600000) * 100)
    }else if(lvl === 36){
      cw -=1600000;
      return Math.floor((cw / 1700000) * 100)
    }else if(lvl === 37){
      cw -=1700000;
      return Math.floor((cw / 1800000) * 100)
    }else if(lvl === 38){
      cw -=1800000;
      return Math.floor((cw / 1900000) * 100)
    }else if(lvl === 39){
      cw -=1900000;
      return Math.floor((cw / 2000000) * 100)
    }else if(lvl === 40){
      cw -=2000000;
      return Math.floor((cw / 2100000) * 100)
    }else if(lvl === 41){
      cw -=2100000;
      return Math.floor((cw / 2200000) * 100)
    }else if(lvl === 42){
      cw -=2200000;
      return Math.floor((cw / 2300000) * 100)
    }else if(lvl === 43){
      cw -=2300000;
      return Math.floor((cw / 2400000) * 100)
    }else if(lvl === 44){
      cw -=2400000;
      return Math.floor((cw / 2500000) * 100)
    }else if(lvl === 45){
      cw -=2500000;
      return Math.floor((cw / 2600000) * 100)
    }else if(lvl === 46){
      cw -=2600000;
      return Math.floor((cw / 2700000) * 100)
    }else if(lvl === 47){
      cw -=2700000;
      return Math.floor((cw / 2800000) * 100)
    }else if(lvl === 48){
      cw -=2800000;
      return Math.floor((cw / 2900000) * 100)
    }else if(lvl === 49){
      cw -=2900000;
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
