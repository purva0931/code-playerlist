import React from "react";

const Players = ({ matchList, player }) => {
  return (
    <>
      <pre
        style={{
          maxWidth: 250,
          border: "1px solid #333",
          padding: 10,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "10px 20px",
        }}
      >
        <h2>{player.PFName}</h2>
        <img
          src={`/player-images/${player.Id}.jpg`}
          style={{ width: "100%" }}
        />
        <p style={{ marginBottom: 0 }}>Skill Desc:{player.SkillDesc}</p>
        <p style={{ marginBottom: 0 }}>Value: ${player.Value}</p>

        {Array.isArray(matchList) &&
          matchList.map((match, id) => (
            <section key={match + id}>
              <p>
                Upcoming Match:{match.CCode} vs {match.VsCCode}
              </p>
              <p>
                Match Date:
                {new Date(match.MDate).toLocaleString()}
              </p>
            </section>
          ))}
      </pre>
    </>
  );
};

export default Players;
