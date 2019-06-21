import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		//wrapped in a div just in case you want to add more
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;