import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

/* Body component - Search bar, Restaurant container */
const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	/* This is used for top carousel display data */
	const [topCarousel, setTopCarousel] = useState([]);
	const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
		[]
	);
	const [seachText, setSearchText] = useState("");
	/* This is used to check the online status of the user */
	const onlineStatus = useOnlineStatus();

	// const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	/* fetch data from API */
	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		setTopCarousel(
			json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
		);
		setListOfRestaurants(
			json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredListOfRestaurants(
			json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	/* onSearch is used to search restaurants */
	const onSearch = () => {
		const searchedRes = listOfRestaurants?.info.filter((res) =>
			res.data.name.toLowerCase().includes(seachText.toLowerCase())
		);
		setFilteredListOfRestaurants(searchedRes);
	};

	/* If the user is offline then this is rendered */
	if (onlineStatus === false)
		return (
			<h1>
				Looks like you are offline!! Please check your internet connection!
			</h1>
		);

	/* Conditional Rendering - This is shimmer UI - used before the page renders for an API call  */
	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="h-[340px] bg-darkblue flex justify-center items-center">
				{topCarousel &&
					topCarousel.map((item, index) => {
						return (
							<div className="container mx-auto py-10">
								<div
									className="w-425px h-260px mx-auto mb-50px overflow-hidden"
									style={{
										animation: "scroll 5s linear infinite",
										width: `${item.length * 425}px`,
									}}
								>
									<div key={index} className={`w-425px h-260px p-2`}>
										<img
											src={
												"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
												item.imageId
											}
											alt={`Image ${index + 1}`}
											className="object-cover w-full h-full"
										/>
									</div>
								</div>
							</div>
						);
					})}
			</div>
			<div className="flex justify-center p-5">
				<input
					name="search"
					placeholder="Search Restaurant"
					value={seachText}
					className="bg-darkblue text-white font-roboto p-5 rounded-xl m-2 w-96"
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					className="bg-slateblue font-roboto p-5 rounded-xl m-2 text-white font-bold"
					onClick={() => onSearch()}
				>
					Search
				</button>
			</div>
			<div className="filter">
				<button
					onClick={() => {
						const filteredList = listOfRestaurants?.info.filter(
							(res) => res.data.avgRating > 4
						);
						setListOfRestaurants(filteredList);
					}}
					className="bg-slateblue font-roboto p-5 rounded-xl ml-16 text-white font-bold align-middle"
				>
					Top Rated Restaurant
				</button>
			</div>
			<hr className="text-slateblue mt-10 mb-5 mx-5" />
			<div className="flex-wrap flex justify-evenly">
				{filteredListOfRestaurants &&
					filteredListOfRestaurants.map((restaurant) => {
						return (
							<Link
								key={restaurant?.info.id}
								className="res-container-link"
								to={"/restaurant/" + restaurant?.info.id}
							>
								{/* TODO: Fix this list of promoted restautants */}
								{/* {restaurant.data.promoted ? (
									<RestaurantCardWithPromotedLabel
										key={restaurant?.info.id}
										resData={restaurant?.info}
									/>
								) : ( */}
								<RestaurantCard
									key={restaurant?.info.id}
									resData={restaurant?.info}
								/>
								{/* )} */}
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default Body;
