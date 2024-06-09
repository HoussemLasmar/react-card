import players from '../data/players.js'


function Players () {
    return (
    <div >
    
        
       {
        players.map((player) => (
            <div>
                <h2>{player.fname}</h2>
                <h2>{player.lname}</h2>
                <p>
                    {player.age}
                </p>
                <p>
                    {player.team}
                </p>
                <p>
                    {player.nationality}
                </p>
                <img src={player.image} alt='' />
    
                
            </div>
        ))
       }
    </div>
    )
    
    }
    export default Players;