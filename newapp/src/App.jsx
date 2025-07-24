// component:- component is code of block like as a function.
// Jsx <></>:- Jsx is a javascript extension which allow write the html in js file

import LoginPage from "./component/Login/Login";
import SignUpPage from "./component/SignUp/SignUp";
import Car1 from "./component/Car1/Car1";
import WeatherPage from "./component/Weather/WeatherPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <h1>I am secondary main file</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/car1" element={<Car1 />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
