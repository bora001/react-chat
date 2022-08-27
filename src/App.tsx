import "antd/dist/antd.css";
import axios from "axios";
import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import ChatBox from "./component/ChatBox";
import InputBox from "./component/InputBox";
import { weatherInfo, WeatherType } from "./store/store";
import { CenterBoard, ChatBoard, Header } from "./style/styles";
function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const scrollToRef = useRef<HTMLDivElement>(null);
  const setCurrentWeather = useSetRecoilState<WeatherType>(weatherInfo);
  const getLocation = () => {
    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        )
        .then((response) => {
          console.log(response.data.weather[0]);
          setCurrentWeather({
            title: response.data.weather[0].main,
            icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function error() {
      console.log("error");
    }

    navigator.geolocation.getCurrentPosition(success, error);
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <CenterBoard>
      <ChatBoard>
        <Header>Chat</Header>
        <ChatBox scrollToRef={scrollToRef} />
        <InputBox scrollToRef={scrollToRef} />
      </ChatBoard>
    </CenterBoard>
  );
}

export default App;
