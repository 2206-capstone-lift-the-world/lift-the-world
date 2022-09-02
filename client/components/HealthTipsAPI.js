import React, { useState, useEffect } from "react";

const HealthTipsAPI = () => {
  const [tips, setTips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/")
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(true), setTips(json);
      });
  }, [tips]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <div>Data has been loaded</div>;
  }
};

export default HealthTipsAPI;
