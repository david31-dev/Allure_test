import React from 'react';
import AllureLogoSVG from '../images/allure-logo.svg';
import AllureTextSVG from '../images/store-text.svg';
const AllureLogo = () => {
  return (
    <div className='allure_log'>
        <img className='allure_logo_image' src={AllureLogoSVG} alt="Allure" />
        <img className='allure_logo_text' src={AllureTextSVG} alt="Allure" />
    </div>
  );
}

export default AllureLogo;
