import { useState } from "react";
import axios from "axios"
import './WeatherPage.css';


function WeatherPage() {
  const [cityData, setCityData] = useState({ city: "" });
  const [weather,setweather] = useState({})

  let handleChange = (e) => {
    let { name, value } = e.target;
    setCityData({ ...cityData, [name]: value });
  };

  let handldeClick= () => {
    console.log(cityData)
    let API_KEY = "150be12d87414f7782f95241251507"
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q= ${cityData.city}`).then((res)=>{
      // console.log(res);
      setweather(res.data.current);

    });

    console.log(weather);

  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    City
                  </label>
                  <input
                    name="city"
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your city"
                    onChange={handleChange}
                  />
                </div>
                <button onClick={handldeClick}  class="btn btn-primary">Search</button>
                <div>
                  Temprature:{weather.temp_c} <br />
                  farenheit:{weather.temp_f} <br />
                  Humidity:{weather.humidity} <br />
                  feels like:{weather.feelslike_c} <br />
                  {/* feels like:{weather.feelslike_f} */}
                  </div> 
              </div>
            </div>
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
