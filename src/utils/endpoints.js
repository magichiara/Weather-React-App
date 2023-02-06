import { API_KEY } from "../config/environment";

const BASE_URL = "http://api.weatherapi.com/v1/";

const GET = async (city) => {
  const URL = `${BASE_URL}forecast.json?q=${city}&key=${API_KEY}&days=7`;
  try {
    const res = await fetch(URL);
    if (res.status >= 400) {
      throw new Error("Problem connecting to server");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return { status: false };
  }
};

export { GET };
