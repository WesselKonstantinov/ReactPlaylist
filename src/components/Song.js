function Song(props) {
    const { name, artist, genre, rating, id } = props;

    function handleClick() {
        props.deleteSong(id);
    }

    return (
        <tr className="song-table__row">
            <td className="song-table__data">
                {name}
            </td>
            <td className="song-table__data">
                {artist}
            </td>
            <td className="song-table__data">
                {genre}
            </td>
            <td className="song-table__data">
                {rating}
            </td>
            <td className="song-table__data">
                <button onClick={handleClick} className="song-table__delete-button">Delete</button>
            </td>
        </tr>
    );
}

export default Song;