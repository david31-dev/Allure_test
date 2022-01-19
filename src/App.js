import { Route, Routes  } from "react-router-dom";
import KlaviyoFormPage from "./pages/KlaviyoFormPage";
import QRPage from "./pages/QRPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
  <Routes>
    <Route path="/" element={<QRPage />} />
    <Route path="klaviyo-form" element={<KlaviyoFormPage />} />
    <Route path="success" element={<SuccessPage />} />
  </Routes>
  );
}

export default App;
