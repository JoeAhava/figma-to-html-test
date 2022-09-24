import React from "react";
import { FaClock } from "react-icons/fa";
import Time from "./Time";
export default function DrawTile({
	thumbnail,
	price,
	label,
	linkUrl,
	linkLabel,
}) {
	return (
		<div className=" border-2 border-slate-100 flex flex-col rounded-md ">
			<div className=" flex px-4 py-2 items-center justify-around space-x-2">
				<img
					src={thumbnail || "/laptop.png"}
					alt="Laptop"
					className=" place-self-start w-20 h-20   px-1 rounded-full border-2 border-slate-200"
				/>
				<div className=" flex flex-col p-2 text-red-500">
					<div className="flex w-full h-full text-red-500">
						{
							//     <img
							// 	src={locale === "en" ? "/united-states.png" : "/ethiopia.png"}
							// 	alt="flag for locale"
							// 	className=" w-7 h-6 mr-2"
							// />
						}
						<image
							src={"/united-states.png"}
							alt="USA flag"
							className=" w-6 h-6"
						/>
						<label className=" uppercase text-black text-sm">
							Mega Millions
						</label>
					</div>
					<h1 className=" font-bold  uppercase text-green-500 text-xl">
						$ {price}
					</h1>
				</div>
			</div>
			<div className=" flex space-x-2 bg-sky-700 self-stretch py-2 px-2 font-bold">
				<button
					onClick={() => {}}
					className=" px-2 py-1 bg-yellow-300 rounded-md text-xl"
				>
					Play Now
				</button>
				<h2 className=" pl-6 xl:pl-14 flex items-center space-x-2 text-xl text-white">
					<FaClock /> <text> 1:22:10 </text>
				</h2>
			</div>
		</div>
	);
}
