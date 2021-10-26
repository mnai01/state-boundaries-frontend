import { useEffect } from "react";

const Map: React.FC = () => {
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("https://state-boundries.herokuapp.com/api/borders/", {
        headers: { "Access-Control-Allow-Origin": true },
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  });

  return <p>test</p>;
};

export default Map;
