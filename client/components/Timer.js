import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Timer() {
  return (
    <div>
      <CircularProgressbar value={60} text={`60%`} />
    </div>
  )
}
