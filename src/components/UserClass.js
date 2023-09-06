import React from 'react';

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: '',
				bio: '',
			},
		};
	}

	async componentDidMount() {
		const userData = await fetch('https://api.github.com/users/Kartik1110');
		const json = await userData.json();
		this.setState({
			userInfo: json,
		});
	}

	render() {
		const { name, bio } = this.state.userInfo;
		return (
			<div className="user-card">
				<h2>Name: {name}</h2>
				<h3>{bio}</h3>
			</div>
		);
	}
}
export default UserClass;
