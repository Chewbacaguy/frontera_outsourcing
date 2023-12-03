import React from "react";
import { Link } from 'react-router-dom';

const Button = ({ styles }) => (
  <Link to="/learn-more" className={`mt-10 inline-block ${styles}`}>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Free consultation
    </button>
  </Link>
);

export default Button;
