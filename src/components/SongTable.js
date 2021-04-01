import Song from './Song';

function SongTable() {
    return (
        <table>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Rating</th>
            </tr>
            <Song />
        </table>
    );
}

export default SongTable;