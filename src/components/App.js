import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';




class App extends React.Component {

	state = { images: [] }; // create an object with an empty array

	 onSearchSubmit = async (term) => { 
		//Do some api call using axios 'npm install --save axios'
		const response = await unsplash.get('/search/photos', { 
			params: { query: term },

		});

		this.setState({ images: response.data.results });

	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onMySubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} /> 
			</div>
		); 
	}
	
}


export default App;
