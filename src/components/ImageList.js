import './imageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {

	// We use mapping to make it easy to call functions on each element in the array.
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image}  />;
	});






return <div className="image-list">{images}</div>;

}

export default ImageList;

