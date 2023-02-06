import { WeatherAssets } from "./WeatherAssets";

const getIndex = (text) => {
  const weatherIndex = WeatherAssets.findIndex(
    (elem) => elem.day === text || elem.night === text
  );
  if (weatherIndex >= 0) return weatherIndex;
  return 0;
};

const changeBg = (weather, isday) => {
  const weatherArr = WeatherAssets.filter(
    (item) => item.day === weather || item.night === weather
  );
  console.log(weatherArr);
  if (weatherArr.length !== 1) return;
  if (isday === 1) {
    document.body.style.backgroundImage = `url(${weatherArr[0].daybg})`;
  } else {
    document.body.style.backgroundImage = `url(${weatherArr[0].nightbg})`;
  }
};

export { getIndex, changeBg };
