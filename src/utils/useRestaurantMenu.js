import { useEffect, useState } from 'react';
import { RESTAURANT_API } from '../utils/constants';

/* custom hook to fetch data for restaurant menu */
const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const data = await fetch(RESTAURANT_API + resId);
		const json = await data.json();
		setResInfo(json.data);
	}

	return resInfo;
};

export default useRestaurantMenu;
