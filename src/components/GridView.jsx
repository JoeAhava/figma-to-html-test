import React, { useEffect, useState } from "react";
import CardTile from "./CardTile";

export default function GridView() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems([
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
			{
				thumbnail: "/megamillions.png",
				price: "112,000,000",
			},
		]);
	}, []);
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 space-x-2 space-y-2 my-4">
			{items.map(({ thumbnail, price }) => (
				<CardTile thumnail={thumbnail} price={price} />
			))}
		</div>
	);
}
