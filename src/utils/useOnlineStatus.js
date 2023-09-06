const { useState, useEffect } = require('react');

/* This custom hook is used to check if the user's
 * internet is active and return the internet status */
const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(true);

	useEffect(() => {
		/* Window online event listener */
		window.addEventListener('online', () => {
			setOnlineStatus(true);
		});

		window.addEventListener('offline', () => {
			setOnlineStatus(false);
		});
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;
