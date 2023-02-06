import styles from "./styles.module.scss";
import { BiSearch } from "react-icons/bi";
import { useEffect } from "react";
import { GET } from "../../utils/endpoints";

export const Search = ({ inputSearch, setInputSearch, setData, setError }) => {
  useEffect(() => {
    GET("rome").then((data) => setData(data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    GET(inputSearch).then((data) => {
      if (data?.status === false) {
        setError(true);
      } else {
        setData(data);
      }
    });
    setInputSearch("");
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        value={inputSearch}
        type="text"
        placeholder="Search"
        onChange={(e) => setInputSearch(e.target.value)}
        required
      />
      <button type="submit">
        <BiSearch />
      </button>
    </form>
  );
};
