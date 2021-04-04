import Song from './Song';

function SongTable(props) {
    let songs;
    if (props.filteredValues.genre && !props.filteredValues.rating) {
        songs = props.songs.filter(song => song.genre === props.filteredValues.genre);
    } else if (props.filteredValues.rating && !props.filteredValues.genre) {
        songs = props.songs.filter(song => song.rating === props.filteredValues.rating);
    } else if (props.filteredValues.genre && props.filteredValues.rating) {
        songs = props.songs.filter(song => (song.genre === props.filteredValues.genre) && (song.rating === props.filteredValues.rating));
    } else {
        songs = props.songs;
    }

    return (
        <table className="song-table">
            <thead>
                <tr className="song-table__row">
                    <th className="song-table__header">Song</th>
                    <th className="song-table__header">Artist</th>
                    <th className="song-table__header">Genre</th>
                    <th className="song-table__header">Rating</th>
                    <th className="song-table__header">Action</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(song => (
                    <Song
                        key={song.id}
                        name={song.name}
                        artist={song.artist}
                        genre={song.genre}
                        rating={song.rating}
                        id={song.id}
                        deleteSong={props.deleteSong}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default SongTable;