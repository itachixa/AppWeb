import { useState } from "react";
import TournamentList from "./components/TournamentList";
import TournamentForm from "./components/TournamentForm";
import Bracket from "./components/Bracket";

function App() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);

  return (
    <div className="App">
      <h1>eSports Tournament Organizer</h1>
      <TournamentForm setTournaments={setTournaments} />
      <TournamentList
        tournaments={tournaments}
        setSelectedTournament={setSelectedTournament}
      />
      {selectedTournament && <Bracket tournament={selectedTournament} />}
    </div>
  );
}

export default App;
