import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(1);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const game = {
      title,
      genre,
      designer,
      description,
      min_players: minPlayers,
      max_players: maxPlayers
    };

    await createGame(game);

    history.push('/board-games');
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          <input onChange={(e) => setTitle(e.target.value)}
            value={title}
            name='title' 
            required />
        </label>
        <label>
            Genre
          <select onChange={(e) => setGenre(e.target.value)}
            value={genre}
            required>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          <input onChange={(e) => setDesigner(e.target.value)}
            value={designer}
            name='designer' required />
        </label>
        <label>
            Min Players
          <input onChange={(e) => setMinPlayers(e.target.value)}
            value={minPlayers}
            name='min_players' required />
        </label>
        <label>
            Max Players
          <input onChange={(e) => setMaxPlayers(e.target.value)}
            value={maxPlayers}
            name='max_players' 
            required />
        </label>
        <label>
            Description
          <textarea onChange={(e) => setDescription(e.target.value)}
            value={description}
            name='max_players' 
            required />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}