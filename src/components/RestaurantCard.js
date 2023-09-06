/* Restaurant card component -  Img, Name, Star rating, Cuisine, Delivery Time */
const RestaurantCard = (props) => {
	const { resData } = props;

	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		deliveryTime,
		costForTwo,
	} = resData;
	return (
		<div className="flex-col justify-center w-80 p-5 m-5 h-[425px] text-darkblue font-roboto rounded-lg hover:shadow-lg hover:shadow-grey">
			<img
				className="pb-5 rounded-lg"
				src={
					(src =
						"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
						cloudinaryImageId)
				}
				alt="Res-card"
			/>
			<h3 className="text-darkblue font-bold text-xl pb-5">{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} ⭐</h4>
			<h4>{deliveryTime} minutes</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

/* Higher Order Component - withPromotedLabel (Shows restaurant card with promoted label on top) */
export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute ml-5 bg-cream text-darkblue font-medium rounded-lg px-2 py-1">
					PROMOTED
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
