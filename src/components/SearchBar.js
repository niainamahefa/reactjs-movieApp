import React from 'react'
import TextField from "@material-ui/core/TextField";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: "", placeholder: "Tapez votre film..."};
    }

    render() {
        return (
            <div>
                <TextField id="outlined-search" label="Rechercher un film" type="search" onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder} variant="outlined" />
            </div>
        )
    }

    handleChange(event) {
        // Change state
        this.setState({searchText: event.target.value});
    }
}
export default SearchBar