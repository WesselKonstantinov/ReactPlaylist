function Song(props) {
    const { name, artist, genre, rating, id } = props;

    function handleClick() {
        props.deleteSong(id);
    }

    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {artist}
            </td>
            <td>
                {genre}
            </td>
            <td>
                {rating}
            </td>
            <td>
                <button onClick={handleClick}>Delete</button>
            </td>
        </tr>
    );
}

export default Song;