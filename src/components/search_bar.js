import React, { Component } from 'react'; 

// Functional Component: simple SearchBar function
// const SearchBar = () => {
// 	return <input />;
// };

// Class based Component
class SearchBar extends Component {
	constructor(props) {
		// inheret properties from parent React.Component 
		super(props);

		// record search term on this.state.term when changed
		this.state = { term: '' };
	}

	render() {
		// pass event handler to element to watch
		// onChange is special React listener, in which we define the event handler
		return (
			<div>
				<input 
					// initial value is an empty string, per the constructor
					// each user input triggers re-render and sets value to new search term
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />;
			</div>
		);
	}
}


export default SearchBar;