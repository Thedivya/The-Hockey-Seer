import React, { useState } from "react";
import data from "./csvjson.json";

const Home = () => {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [tournament, setTournament] = useState("");
  const [winAPercentage, setWinAPercentage] = useState(null);
  const [winBPercentage, setWinBPercentage] = useState(null);
  const [drawPercentage, setDrawPercentage] = useState(null);
  const [teamARank, setTeamARank] = useState("");
  const [teamBRank, setTeamBRank] = useState("");
  const [bestPlayerA, setBestPlayerA] = useState("");
  const [bestPlayerB, setBestPlayerB] = useState("");
  const [dominate, setDominate] = useState("-")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", teamA, teamB, tournament);
    if (tournament.includes("Olympics")) {
      const match = data.find((match) => {
        if (
          ((teamA === match["Team A"] &&
          teamB === match["Team B"])
          || (teamA === match["Team B"] &&
          teamB === match["Team A"])) &&
          tournament.includes("Olympic")
        ) {
          setTeamA(teamA);
          setTeamB(teamB);
          setTournament(tournament);
          setBestPlayerA(match["Team A BP"]);
          setBestPlayerB(match["Team B BP"]);
          setDrawPercentage(match["Draw Percent"]);
          setTeamARank(match["Team A Rank"]);
          setTeamBRank(match["Team B Rank"]);
          setWinAPercentage(match["Win Percent A"]);
          setWinBPercentage(match["Win Percent B"]);
          setDominate(match["Olympics Domination"])
        }
      });
    } else if (tournament.includes("FIH")) {
      const match = data.find((match) => {
        if (
            ((teamA === match["Team A"] &&
            teamB === match["Team B"])
            || (teamA === match["Team B"] &&
            teamB === match["Team A"])) &&
          tournament.includes("FIH")
        ) {
          setTeamA(teamA);
          setTeamB(teamB);
          setTournament(tournament);
          setBestPlayerA(match["Team A BP"]);
          setBestPlayerB(match["Team B BP"]);
          setDrawPercentage(match["Draw Percent"]);
          setTeamARank(match["Team A Rank"]);
          setTeamBRank(match["Team B Rank"]);
          setWinAPercentage(match["Win Percent A"]);
          setWinBPercentage(match["Win Percent B"]);
          setDominate(match["World Cup Domination"])
        }
      });
    } else {
      const match = data.find((match) => {
        if (
            ((teamA === match["Team A"] &&
            teamB === match["Team B"])
            || (teamA === match["Team B"] &&
            teamB === match["Team A"])) &&
          tournament.includes("World")
        ) {
          setTeamA(teamA);
          setTeamB(teamB);
          setTournament(tournament);
          setBestPlayerA(match["Team A BP"]);
          setBestPlayerB(match["Team B BP"]);
          setDrawPercentage(match["Draw Percent"]);
          setTeamARank(match["Team A Rank"]);
          setTeamBRank(match["Team B Rank"]);
          setWinAPercentage(match["Win Percent A"]);
          setWinBPercentage(match["Win Percent B"]);
          setDominate(match["FIH Pro League Domination"])

          
        }
      });
    }
  };
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li className="logo">
              <img
                src="https://i.ibb.co/HhWy6SL/logo.png"
                alt="Website Logo"
                width="50px"
                height="50px"
              />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://www.fih.hockey/outdoor-hockey-rankings">
                Team Rankings
              </a>
            </li>
            <li>
              <a href="https://www.fih.hockey">FIH Site</a>
            </li>
            <li>
              <a href="mailto:anshsaxena471@gmail.com?subject=Hockey%20Prediction%20Website.">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="predict">
        <form onSubmit={handleSubmit}>
          <h1>Hockey Match Predictor</h1>
          <select
            className="teama"
            required
            value={teamA}
            onChange={(e) => setTeamA(e.target.value)}
          >
            <option value="" disabled selected>
              Select Team A
            </option>
            <option>Argentina</option>
            <option>Australia</option>
            <option>Belarus</option>
            <option>Belgium</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>Chile</option>
            <option>China</option>
            <option>Cuba</option>
            <option>Egypt</option>
            <option>England</option>
            <option>France</option>
            <option>Germany</option>
            <option>Great Britain</option>
            <option>India</option>
            <option>Ireland</option>
            <option>Japan</option>
            <option>Kenya</option>
            <option>Korea</option>
            <option>Malaysia</option>
            <option>Netherlands</option>
            <option>New Zealand</option>
            <option>Pakistan</option>
            <option>Poland</option>
            <option>Russia</option>
            <option>South Africa</option>
            <option>Spain</option>
            <option>United States</option>
            <option>Wales</option>
          </select>
          <select className="teamb" required value={teamB}
           onChange={(e) => setTeamB(e.target.value)}>
            <option value="" disabled selected>
              Select Team B
            </option>
            <option>Argentina</option>
            <option>Australia</option>
            <option>Belarus</option>
            <option>Belgium</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>Chile</option>
            <option>China</option>
            <option>Cuba</option>
            <option>Egypt</option>
            <option>England</option>
            <option>France</option>
            <option>Germany</option>
            <option>Great Britain</option>
            <option>India</option>
            <option>Ireland</option>
            <option>Japan</option>
            <option>Kenya</option>
            <option>Korea</option>
            <option>Malaysia</option>
            <option>Netherlands</option>
            <option>New Zealand</option>
            <option>Pakistan</option>
            <option>Poland</option>
            <option>Russia</option>
            <option>South Africa</option>
            <option>Spain</option>
            <option>United States</option>
            <option>Wales</option>
          </select>
          <br />
          <br />
          <select className="tournament" required value={tournament}
          onChange={(e) => setTournament(e.target.value)}>
            <option value="" disabled selected>
              Select Tournament
            </option>
            <option>World Cup</option>
            <option>Olympics</option>
            <option>FIH Pro League</option>
          </select>
          <br />
          <button className="button" type="submit">Predict</button>
        </form>
        {console.log(
        teamA,
        teamB,
        tournament,
        winAPercentage,
        winBPercentage,
        drawPercentage,
        teamARank,
        teamBRank,
        bestPlayerA,
        bestPlayerB
      )}
      </div>
      <br />

      <div className="chart-container">
            <div className="winAbar">{(Math.round(winAPercentage*100))===0?"":(Math.round(winAPercentage*100))+"%"}</div>
            <div className="drawbar">{(Math.round(drawPercentage*100))===0?"":(Math.round(drawPercentage*100))+"%"}</div>
            <div className="winBbar">{(Math.round(winBPercentage*100))===0?"":(Math.round(winBPercentage*100))+"%"}</div>
      </div>
      <div className="dominant">
        <h1>Dominant Team</h1>
        <div className="display-box">
          <h2>{dominate}</h2>
        </div>
        <p>
          Based on the latest updates and statistics of the tournament, it seems
          that this team has emerged as the clear dominant force.
          <br />
          They have won most of their matches and have consistently exhibited
          exceptional skills and teamwork. It will be interesting to see if
          opposition team can challenge their dominance in the upcoming matches.
        </p>
      </div>

      <h1>
        Current World Ranking of Teams
        <br />&<br />
        Players to watch out
      </h1>
      <div className="current">
        <div className="display-box1">
          <h2>{teamA}</h2>
          <h3>Rank: {teamARank}</h3>
          <br />
          <div className="display-box1inside">
            <h4>Team's Best Player: {bestPlayerA} ({teamA})</h4>
          </div>
        </div>
        <div className="display-box2">
          <h2>{teamB}</h2>
          <h3>Rank: {teamBRank}</h3>
          <br />
          <div className="display-box2inside">
            <h4>Team's Best Player: {bestPlayerB} ({teamB})</h4>
          </div>
        </div>
      </div>

      

      <div className="contact">
        <form>
          <h2>Contact Us</h2>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label for="message">Message:</label>
          <textarea name="message" cols="30" rows="5" required></textarea>
          <div className="center">
            <button className="submit1"><a href="/" className="aaa">Submit</a></button>
          </div>
        </form>
      </div>

      <br />
      <hr width="75%" />

      <div className="footer">
        <p>© 2024 The Hockey Seer. All rights reserved</p>
      </div>
    </>
  );
};

export default Home;
