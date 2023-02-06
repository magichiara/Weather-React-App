import "./App.css";
import { useState, useEffect } from "react";
import { Search } from "./components/search/Search";
import { Weather } from "./components/weather/Weather";
import { Details } from "./components/details/Details";
import { NextDays } from "./components/nextdays/NextDays";
import { changeBg } from "./utils/utils";
import ErrorPage from "./components/errorpage/ErrorPage";

const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    changeBg(data?.current?.condition.text, data?.current.is_day);
  }, [data]);

  if (error) return <ErrorPage />;
  return (
    <div className="App">
      <div className="main-section">
        <div className="left-section">{data && <Weather data={data} />}</div>
        <div className="right-section">
          <Search
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            setData={setData}
            setError={setError}
          />
          {data && <Details data={data} />}
          <NextDays data={data?.forecast} />
        </div>
      </div>
    </div>
  );
};

export default App;
