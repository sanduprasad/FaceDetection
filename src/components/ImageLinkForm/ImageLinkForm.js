import React from 'react';
import './ImageLinkForm.css'; 

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
	return(
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces from the picture.'}
			</p>
			<div className='center'>
				<div className='center from pa4 br3 shadow-5'>
					<input 
						type='text' 
						className='fu pa2 w70 center' 
						onChange={onInputChange}
					/>
					<button 
						className='w30 frow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}>Submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;