import { useState } from 'react';
import SongForm from './SongForm';
import SongTable from './SongTable';

function SongOverview() {
    const [songs, setSongs] = useState([{
        id: 1,
        name: 'Pump up the jam',
        artist: 'Technotronic',
        genre: 'House',
        rating: 5,
    }]);

    return (
        <main>
            <SongForm />
            <SongTable songs={songs} />
        </main>
    );
}

export default SongOverview;