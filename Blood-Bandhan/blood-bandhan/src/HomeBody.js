import React, { Component } from 'react';
import './css/HomeBody.css';
import Corousal from './Corousal'



class HomeBody extends Component {

	render() {
		return (
			<div>
				
			
				<div className='home'>

					<div className='coro' >
						<Corousal />


					</div>
				</div>
			</div>
		);
	}
}

export default HomeBody;