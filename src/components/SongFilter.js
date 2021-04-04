function SongFilter(props) {
    function handleFilterChange(e) {
        const { name, value } = e.target;
        props.setFilteredValues({
            ...props.filteredValues,
            [name]: value,
        });
    }

    return (
        <form>
            <label htmlFor="genre-select">Filter by:</label>
            <select name="genre" id="genre-select" onChange={handleFilterChange}>
                <option value="">{(props.filteredValues.genre) ? 'Reset filter' : '-- Genre --'}</option>
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

            <label htmlFor="rating-select">Filter by:</label>
            <select name="rating" id="rating-select" onChange={handleFilterChange}>
                <option value="">{(props.filteredValues.rating) ? 'Reset filter' : '-- Rating --'}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </form>
    );
}

export default SongFilter;