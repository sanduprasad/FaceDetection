import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png';

const Logo = () =>{
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner"> <img className='pa3 pt3' alt='logo' src={brain} /> </div>
			</Tilt>
		</div>
	)
}

export default Logo;