import ItemList from './ItemList';

/* This is a component that displays the category of the restaurant
 * for the accordian in restaurant menu */
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const handleToggle = () => {
		setShowIndex();
	};
	return (
		<div>
			<div className="w-6/12 mx-auto bg-grey shadow-md my-4 p-5 rounded-md">
				<div
					onClick={handleToggle}
					className="flex justify-between cursor-pointer"
				>
					<span className="font-bold text-lg text-darkblue">
						{data.title} ({data.itemCards.length})
					</span>
					<span>{showItems ? '⬆️' : '⬇️'}</span>
				</div>
				{showItems && <ItemList items={data.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
