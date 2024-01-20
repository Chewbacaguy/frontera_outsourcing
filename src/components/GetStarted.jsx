import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const navigate = useNavigate(); // useNavigate for navigation

  const navigateToContact = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div onClick={navigateToContact} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <button type="button" className={`${styles.flexCenter} font-bold text-center p-2 cursor-pointer` }>
      Free consultation
      </button>
      
    </div>
  );
};

export default GetStarted;