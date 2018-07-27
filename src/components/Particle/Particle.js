import React from 'react';
import Particle from 'react-particles-js';
import './Particle.css'

const particleOptions = {
	particle: {
		number: {
			value: 30,
			desnity: {
				enable: true,
				value_area: 500}
			}
		}
     
}

const Particles = () => {
	return(
		 <Particle className='particle'
              params={{
            		particleOptions
            	}}
         />
	);
}

export default Particles;