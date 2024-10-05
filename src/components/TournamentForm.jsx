import { useState } from "react";

function TournamentForm({ setTournaments }) {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [teams, setTeams] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTournament = { name, game, teams: teams.split(",") };
    setTournaments((prev) => [...prev, newTournament]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du tournoi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Jeu (ex: FIFA, LoL)"
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />
      <input
        type="text"
        placeholder="Équipes (séparées par des virgules)"
        value={teams}
        onChange={(e) => setTeams(e.target.value)}
      />
      <button type="submit">Créer Tournoi</button>
    </form>
  );
}

export default TournamentForm;
