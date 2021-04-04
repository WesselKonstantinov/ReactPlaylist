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
    const [filteredValues, setFilteredValues] = useState({
        genre: '',
        rating: '',
    });

    function addSong(inputValues) {
        const { name, artist, genre, rating } = inputValues;
        const newSong = {
            id: new Date().valueOf(), // value based on milliseconds ensures we get a unique id
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
        <main className="app__main-section">
            <SongForm
                inputValues={inputValues}
                setInputValues={setInputValues}
                addSong={addSong}
            />
            <SongFilter
                filteredValues={filteredValues}
                setFilteredValues={setFilteredValues}
            />
            <SongTable
                songs={songs}
                deleteSong={deleteSong}
                filteredValues={filteredValues}
            />
        </main>
    );
}

export default SongOverview;