function TournamentList({ tournaments, setSelectedTournament }) {
    return (
      <div>
        <h2>Tournois</h2>
        <ul>
          {tournaments.map((tournament, index) => (
            <li key={index} onClick={() => setSelectedTournament(tournament)}>
              {tournament.name} - {tournament.game}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TournamentList;
  