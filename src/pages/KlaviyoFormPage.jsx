import React from 'react';
import AllureForm from '../components/AllureForm';
import AllureLogo from '../components/AllureLogo';

const KlaviyoFormPage = () => {
  return (
    <div className="klaviyo_form h-full w-full flex">
        <div className="klaviyo_form_container md:container mx-auto flex flex-col items-center justify-center">
           <AllureLogo/>
           <h2 className="klaviyo_form_subtitle">Enter Your Email Here To Receive</h2>
           <AllureForm/>
          <p className="klavito_form_footer flex justify-center"><span className='f-icon'>🎉</span> You’ll Also Receive A Free $10 Allure Store Gift Card</p>
        </div>
    </div>      
  );
}


export default KlaviyoFormPage;