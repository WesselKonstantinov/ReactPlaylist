function Song(props) {
    const { name, artist, genre, rating } = props;
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
                <button>Delete</button>
            </td>
        </tr>
    );
}

export default Song;