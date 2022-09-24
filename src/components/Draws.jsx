import React from "react";
import DrawTile from "./DrawTile";

export default function Draws() {
	return (
		<div className=" py-2 px-2 md:p-4 uppercase w-full">
			<h1 className=" uppercase text-2xl font-bold ">
				Biggest Upcomming Lottery Draws
			</h1>
			<div className="my-8 flex flex-col space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row w-full">
				{[
					{ img: "/ozlotto.png", price: "132,112,880" },
					{ img: "/megamillions.png", price: "211,000,000" },
					{ img: "/uspowerlotto.png", price: "301,030,000" },
				].map((item) => (
					<DrawTile thumbnail={item.img} price={item.price} />
				))}
			</div>
		</div>
	);
}
