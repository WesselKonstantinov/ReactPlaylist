function Song(props) {
    const { name, artist, genre, rating } = props;
    return (
        <tr>
            <td>{name}</td>
            <td>{artist}</td>
            <td>{genre}</td>
            <td>{rating}</td>
        </tr>
    );
}

export default Song;