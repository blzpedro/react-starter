import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comic } from "../../components/comic";

const HomePage = () => {
  const [comic, setComic] = useState({});
  useEffect(() => {
    const getComicData = async () => {
    await axios
        .get('https://cors-anywhere.herokuapp.com/' + process.env.REACT_APP_API_URL)
        .then(handleSuccess)
        .then(setComic)
        .catch(handleError);
    }
    getComicData();
  }, []);
  return <Comic {...comic} />;
};

const handleSuccess = response => {
  console.log("handleSuccess() @ HomePage:", response);
  return response.data;
};

const handleError = reason => {
  console.error(reason);
  return reason;
};

export default HomePage;
