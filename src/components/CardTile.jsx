import React from "react";
import Time from "./Time";

export default function CardTile({ thumnail, price, time }) {
	return (
		<div className="flex flex-col items-center space-y-2 relative">
			<img
				src={thumnail || "/megamillions.png"}
				alt="Thumbnail"
				className=" w-32 h-32"
			/>
			<h1 className=" text-xl font-bold">$ {price || "112,100,789"}</h1>
			<Time time={time || "1:20:00"} />
			<button
				onClick={() => {}}
				className=" py-1 px-3 bg-yellow-300 font-bold self-stretch"
			>
				Play Now
			</button>
		</div>
	);
}
