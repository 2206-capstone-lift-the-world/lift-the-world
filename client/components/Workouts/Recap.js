import React, { useEffect } from 'react';
import WeightComparison from './WeightComparison';
import { useDispatch, useSelector } from 'react-redux';
import { WorkoutSummary } from './WorkoutSummary';
import { fetchSingleUser, _setSingleUser } from '../../store/singleUser.js';
import ModalOnLeveling from '../ModalOnLeveling';

const Recap = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  useEffect(() => {
    dispatch(fetchSingleUser());
    <ModalOnLeveling />;
    console.log('user level in use effect', user.level);
  }, [user.level]);

  console.log('user level now', user.level);
  return (
    <div className="recap-container">
      <div className="recap-congrats">
        <h4>Great job with your workout!</h4>
      </div>
      <WorkoutSummary />
      <WeightComparison />
      {console.log('user level afterwork', user)}
    </div>
  );
};

export default Recap;
