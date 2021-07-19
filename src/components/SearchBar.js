import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: "", placeholder: "Tapez votre film..."};
    }

    render() {
        return (
            <Container>
                <TextField id="outlined-basic" label="Recherher un film..." variant="outlined" fullWidth
                           onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}
                />
                <span><button>rechercher</button></span>
            </Container>
        )
    }

    handleChange(event) {
        // Change state
        this.setState({searchText: event.target.value});
    }
}
export default SearchBar