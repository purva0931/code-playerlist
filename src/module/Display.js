import React from "react";
import Players from "./Players";
const Display = ({ players }) => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(players) &&
          players.map((player, id) => (
            <pre key={player + id}>
              <Players
                matchList={Object.values(player.UpComingMatchesList)}
                player={player}
              />
            </pre>
          ))}
      </div>
    </>
  );
};

export default Display;
