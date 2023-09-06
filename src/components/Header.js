import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { UserContext } from '../context/userContext';

/* Header Component */
const Header = () => {
	const [btnName, setBtnName] = useState('Login');
	const onlineStatus = useOnlineStatus();
	const user = useContext(UserContext);
	const location = useLocation();

	/* Return 'active' if the current path matches the URL */
	const isActiveTab = (url) => {
		return location.pathname === url ? 'text-orange' : '';
	};

	return (
		<div className="flex justify-between bg-white shadow-lg">
			<div>
				<img
					className="my-5 h-12 pl-2"
					src={require('../assets/app-logo.png')}
					alt="Logo"
				/>
			</div>
			<div>
				<ul className="flex my-5 p-3 ml-4 pr-5">
					<li className="text-darkpurple font-roboto font-bold px-2">
						Online status: {onlineStatus ? '✅' : '🔴'}
					</li>
					<li
						className={`text-darkblue font-roboto hover:text-orange font-bold px-2 ${isActiveTab(
							'/'
						)}`}
					>
						<Link to="/" className="header-link">
							Home
						</Link>
					</li>
					<li
						className={`text-darkblue font-roboto hover:text-orange font-bold px-2 ${isActiveTab(
							'/about'
						)}`}
					>
						<Link to="/about" className="header-link">
							About Us
						</Link>
					</li>
					<li
						className={`text-darkblue font-roboto hover:text-orange font-bold px-2 ${isActiveTab(
							'/contact'
						)}`}
					>
						<Link to="/contact" className="header-link">
							Contact Us
						</Link>
					</li>
					<li
						className={`text-darkblue font-roboto hover:text-orange font-bold px-2`}
					>
						Cart
					</li>
					<li
						className={`text-darkblue font-roboto hover:text-orange font-bold px-2 ${isActiveTab(
							'/grocery'
						)}`}
					>
						<Link to="/grocery" className="header-link">
							Grocery
						</Link>
					</li>
					<button
						className="text-darkblue border border-orange rounded-md font-roboto font-bold px-2"
						onClick={() => {
							btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
						}}
					>
						{btnName}
					</button>
					<li className="text-slateblue font-roboto font-bold px-2">{user}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
