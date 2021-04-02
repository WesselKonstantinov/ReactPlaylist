import { useState } from 'react';
import SongForm from './SongForm';
import SongTable from './SongTable';

function SongOverview() {
    const [songs, setSongs] = useState([]);
    const [inputValues, setInputValues] = useState({
        name: '',
        artist: '',
        genre: '',
        rating: '',
    });

    function addSong(inputValues) {
        const { name, artist, genre, rating } = inputValues;
        const newSong = {
            id: (songs.length === 0) ? 1 : songs.length + 1,
            name: name,
            artist: artist,
            genre: genre,
            rating: rating,
        };
        setSongs([...songs, newSong]);
    }

    return (
        <main>
            <SongForm
                inputValues={inputValues}
                setInputValues={setInputValues}
                addSong={addSong}
            />
            <SongTable songs={songs} />
        </main>
    );
}

export default SongOverview;