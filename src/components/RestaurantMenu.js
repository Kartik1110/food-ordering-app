import { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
	const [showIndex, setShowIndex] = useState(null);
	const { resId } = useParams();
	/* getting resInfo from custom hook */
	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, areaName, locality, city, avgRating, totalRatings } =
		resInfo?.cards[0]?.card?.card?.info;

	/* This is the list of restaurant categories  */
	const categories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(category) =>
				category?.card?.card['@type'] ===
				'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
		);

	return (
		<div className="text-center">
			<div className="w-6/12 m-auto flex justify-between">
				<div className="my-5 text-left">
					<h1 className="font-extrabold text-3xl text-darkblue">{name}</h1>
					<h4 className="text-slateblue font-bold">{cuisines.join(', ')}</h4>
					<h4 className="text-slateblue font-bold">
						📍{areaName}, {locality}, {city}
					</h4>
				</div>
				<div className="my-5 shadow-md shadow-slateblue p-5 rounded-lg">
					<h4 className="font-bold text-darkblue">{avgRating} ⭐</h4>
					<h4 className="font-bold text-orange">{totalRatings} +</h4>
				</div>
			</div>
			{categories.map((category, index) => {
				return (
					<RestaurantCategory
						key={category?.card?.card?.title}
						data={category?.card?.card}
						showItems={index === showIndex ? true : false}
						setShowIndex={() => setShowIndex(index)}
					/>
				);
			})}
		</div>
	);
};

export default RestaurantMenu;
