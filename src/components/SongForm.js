function SongForm() {
    return (
        <form>
            <input type="text" name="song" placeholder="Song" />
            <input type="text" name="artist" placeholder="Artist" />
            <select>
                <option value="">-- Genre --</option>
                <option value="blues">Blues</option>
                <option value="classical">Classical</option>
                <option value="country">Country</option>
                <option value="disco">Disco</option>
                <option value="dubstep">Dubstep</option>
                <option value="eurodance">Eurodance</option>
                <option value="hip-hop">Hip Hop</option>
                <option value="house">House</option>
                <option value="jazz">Jazz</option>
                <option value="latin">Latin</option>
                <option value="metal">Metal</option>
                <option value="pop">Pop</option>
                <option value="rap">Rap</option>
                <option value="reggae">Reggae</option>
                <option value="rhythm-and-blues">Rhythm and Blues</option>
                <option value="rock">Rock</option>
                <option value="soul">Soul</option>
                <option value="techno">Techno</option>
                <option value="trance">Trance</option>
            </select>
            <input type="number" name="rating" min="1" max="5" placeholder="Rating (1-5)" />
            <button type="submit">Add song</button>
        </form>
    );
}

export default SongForm;