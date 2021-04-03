import { useState } from 'react';
import SongForm from './SongForm';
import SongFilter from './SongFilter';
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
            name,
            artist,
            genre,
            rating,
        };
        setSongs([...songs, newSong]);
    }

    function deleteSong(id) {
        const remainingSongs = songs.filter(song => id !== song.id);
        setSongs(remainingSongs);
    }

    return (
        <main>
            <SongForm
                inputValues={inputValues}
                setInputValues={setInputValues}
                addSong={addSong}
            />
            <SongFilter />
            <SongTable
                songs={songs}
                deleteSong={deleteSong}
            />
        </main>
    );
}

export default SongOverview;