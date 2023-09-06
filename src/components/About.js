import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}
	render() {
		return (
			<div>
				<h1 className="text-xl font-roboto">About Us</h1>
				<h2 className="text-xl font-roboto">This is a food ordering app</h2>
				<UserClass name={'First'} location={'India'} />
			</div>
		);
	}
}

export default About;
