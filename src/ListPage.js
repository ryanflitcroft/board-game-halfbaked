import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  const [games, setGames] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const data = await getGames();
      setGames(data);
    }
    getData();
  }, []);

  return (
    <div className='list games'>
      {
        games.map((game, i) =>
          <Game key={game, i} 
            game={game} />
        )
      }
    </div>
  );
}