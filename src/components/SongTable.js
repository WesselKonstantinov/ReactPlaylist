import Song from './Song';

function SongTable(props) {
    const songs = props.songs.map(song => (
        <Song
            key={song.id}
            name={song.name}
            artist={song.artist}
            genre={song.genre}
            rating={song.rating}
            id={song.id}
            deleteSong={props.deleteSong}
        />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {songs}
            </tbody>
        </table>
    );
}

export default SongTable;