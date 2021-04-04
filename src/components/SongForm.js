function SongForm(props) {
    function handleInputChange(e) {
        const { name, value } = e.target;
        props.setInputValues({
            ...props.inputValues,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addSong(props.inputValues);
        props.setInputValues({
            name: '',
            artist: '',
            genre: '',
            rating: '',
        });
    }

    const { name, artist, genre, rating } = props.inputValues;
    return (
        <form onSubmit={handleSubmit} className="song-form">
            <input
                className="song-form__input"
                type="text"
                name="name"
                value={name || ''}
                placeholder="Song"
                onChange={handleInputChange}
            />
            <input
                className="song-form__input"
                type="text"
                name="artist"
                value={artist || ''}
                placeholder="Artist"
                onChange={handleInputChange}
            />
            <select
                className="song-form__select"
                name="genre"
                value={genre || ''}
                onChange={handleInputChange}
            >
                <option value="">-- Choose a genre --</option>
                <option value="Blues">Blues</option>
                <option value="Classical">Classical</option>
                <option value="Country">Country</option>
                <option value="Disco">Disco</option>
                <option value="Dubstep">Dubstep</option>
                <option value="Eurodance">Eurodance</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="House">House</option>
                <option value="Jazz">Jazz</option>
                <option value="Latin">Latin</option>
                <option value="Metal">Metal</option>
                <option value="Pop">Pop</option>
                <option value="Rap">Rap</option>
                <option value="Reggae">Reggae</option>
                <option value="Rhythm and Blues">Rhythm and Blues</option>
                <option value="Rock">Rock</option>
                <option value="Soul">Soul</option>
                <option value="Techno">Techno</option>
                <option value="Trance">Trance</option>
            </select>
            <input
                className="song-form__input"
                type="number"
                name="rating"
                value={rating || ''}
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                onChange={handleInputChange}
            />
            <button type="submit" className="song-form__submit">Add song</button>
        </form>
    );
}

export default SongForm;