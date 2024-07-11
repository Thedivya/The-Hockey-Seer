import React, { useState } from "react";
import data from "./csvjson.json";
import Home from "./Home";
import "./Home.css"
// import { Line, Circle } from "rc-progress";
function App() {
  // const [teamA, setTeamA] = useState("");
  // const [teamB, setTeamB] = useState("");
  // const [tournament, setTournament] = useState("");
  // const [winAPercentage, setWinAPercentage] = useState(null);
  // const [winBPercentage, setWinBPercentage] = useState(null);
  // const [drawPercentage, setDrawPercentage] = useState(null);
  // const [teamARank, setTeamARank] = useState("");
  // const [teamBRank, setTeamBRank] = useState("");
  // const [bestPlayerA, setBestPlayerA] = useState("");
  // const [bestPlayerB, setBestPlayerB] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted with:", teamA, teamB, tournament);
  //   if (tournament.includes("Olympics")) {
  //     const match = data.find((match) => {
  //       if (
  //         teamA === match["Team A"] &&
  //         teamB === match["Team B"] &&
  //         tournament.includes("Olympic")
  //       ) {
  //         setTeamA(teamA);
  //         setTeamB(teamB);
  //         setTournament(tournament);
  //         setBestPlayerA(match["Team A BP"]);
  //         setBestPlayerB(match["Team B BP"]);
  //         setDrawPercentage(match["Draw Percent"]);
  //         setTeamARank(match["Team A Rank"]);
  //         setTeamBRank(match["Team B Rank"]);
  //         setWinAPercentage(match["Win Percent A"]);
  //         setWinBPercentage(match["Win Percent B"]);
  //       }
  //     });
  //   } else if (tournament.includes("FIH")) {
  //     const match = data.find((match) => {
  //       if (
  //         teamA === match["Team A"] &&
  //         teamB === match["Team B"] &&
  //         tournament.includes("FIH")
  //       ) {
  //         setTeamA(teamA);
  //         setTeamB(teamB);
  //         setTournament(tournament);
  //         setBestPlayerA(match["Team A BP"]);
  //         setBestPlayerB(match["Team B BP"]);
  //         setDrawPercentage(match["Draw Percent"]);
  //         setTeamARank(match["Team A Rank"]);
  //         setTeamBRank(match["Team B Rank"]);
  //         setWinAPercentage(match["Win Percent A"]);
  //         setWinBPercentage(match["Win Percent B"]);
  //       }
  //     });
  //   } else {
  //     const match = data.find((match) => {
  //       if (
  //         teamA === match["Team A"] &&
  //         teamB === match["Team B"] &&
  //         tournament.includes("World")
  //       ) {
  //         setTeamA(teamA);
  //         setTeamB(teamB);
  //         setTournament(tournament);
  //         setBestPlayerA(match["Team A BP"]);
  //         setBestPlayerB(match["Team B BP"]);
  //         setDrawPercentage(match["Draw Percent"]);
  //         setTeamARank(match["Team A Rank"]);
  //         setTeamBRank(match["Team B Rank"]);
  //         setWinAPercentage(match["Win Percent A"]);
  //         setWinBPercentage(match["Win Percent B"]);
  //       }
  //     });
  //   }
  // };
  return (
    // <div className="container">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Team A"
    //       value={teamA}
    //       onChange={(e) => setTeamA(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Team B"
    //       value={teamB}
    //       onChange={(e) => setTeamB(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Tournament Name"
    //       value={tournament}
    //       onChange={(e) => setTournament(e.target.value)}
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    //   {console.log(
    //     teamA,
    //     teamB,
    //     tournament,
    //     winAPercentage,
    //     winBPercentage,
    //     drawPercentage,
    //     teamARank,
    //     teamBRank,
    //     bestPlayerA,
    //     bestPlayerB
    //   )}
    //   <div className="progress">
    //     {/* <Line
    //       percent={winAPercentage * 100}
    //       strokeWidth={2}
    //       strokeColor="green"
    //     /> */}
    //     Win A % : {winAPercentage}
    //     Win B % : {winBPercentage}

    //   </div>
    // </div>
    <Home/>
  );
}

export default App;
