function Bracket({ tournament }) {
    const teams = tournament.teams;
  
    return (
      <div>
        <h2>{tournament.name} - Bracket</h2>
        <ul>
          {teams.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
        {/* Ici, tu pourrais implémenter la génération d'un bracket */}
      </div>
    );
  }
  
  export default Bracket;
  