import AllureLogo from "./components/AllureLogo";
import AllureQR from "./images/QR.svg";
function App() {
  return (
    <div className="allure_qr">
      <div className="allure_qr_container">
          <h1 className="allure_qr_title">Everything on the coffee menu today is proudly sponsored by:</h1>
          <div className="allure_qr_log"> 
             <AllureLogo/> 
          </div>
          <div className="allure_qr_image">
            <img className="allure_qr_image-qr" src={AllureQR} alt="allure_qr" />
          </div>
          <div className="allure_qr_footer">
            <p className="allure_qr_footer-text">*Limit 1 per customer</p>
          </div>
        </div>  

    </div>
  );
}

export default App;
