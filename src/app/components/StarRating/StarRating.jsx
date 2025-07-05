import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./StarRating.css";

const FourAndHalfStar = () => {
  const stars = [];

  for (let i = 0; i < 4; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#ffd700" />);
  }

  stars.push(<FontAwesomeIcon key={4} icon={faStarHalfAlt} color="#ffd700" />);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPopping(!isPopping);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPopping]);

  return (
    <div className={`star-container ${isPopping ? "popping" : ""}`}>
      {stars.map((star, index) => (
        <div key={index} className={`star-${index}`}>
          {star}
        </div>
      ))}
    </div>
  );
};

const FiveStar = () => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#ffd700" />);
  }
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPopping(!isPopping);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPopping]);

  return (
    <div className={`star-container ${isPopping ? "popping" : ""}`}>
      {stars.map((star, index) => (
        <div key={index} className={`star-${index}`}>
          {star}
        </div>
      ))}
    </div>
  );
};

export {FourAndHalfStar,FiveStar};
