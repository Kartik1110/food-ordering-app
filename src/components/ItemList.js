import { LOGO_URL } from '../utils/constants';

const ItemList = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="p-2 my-2 border-b-2 border-b-slateblue text-left flex justify-between"
				>
					<div className="w-9/12">
						<div>
							<span className="text-darkblue font-bold">
								{item.card.info.name}
							</span>
						</div>
						<span className="text-darkblue font-medium">
							₹{' '}
							{item.card.info.price
								? item.card.info.price / 100
								: item.card.info.defaultPrice / 100}
						</span>
						<p className="text-sm text-slateblue">
							{item.card.info.description && item.card.info.description}
						</p>
					</div>
					<div className="w-3/12 p-4">
						<div className="absolute mx-20">
							<button className="p-2 rounded-lg bg-darkblue text-white">
								Add +
							</button>
						</div>
						<img
							src={LOGO_URL + item.card.info.imageId}
							alt=""
							className="w-full rounded-lg"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
