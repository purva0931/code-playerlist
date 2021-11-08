import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";

const FetchData = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((res) => {
        console.log(res);
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Display players={players.playerList} />
      {console.log(players)}
      {console.log(players.playerList)}
    </>
  );
};

export default FetchData;
