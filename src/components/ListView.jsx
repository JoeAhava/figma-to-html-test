import React from "react";
import ListTile from "./ListTile";

export default function ListView() {
	return (
		<div className=" flex flex-col space-y-2 items-stretch my-2">
			<div className="flex flex-col items-center pb-2 border-2 border-slate-200 px-4 rounded-md">
				<p>Total prizes paid out</p>
				<h1 className=" text-2xl text-green-500 font-bold">US$ 107 233 768</h1>
				<p>
					<b className="text-xl">6 975 146</b> winning tickets
				</p>
			</div>
			{[1, 2, 3].map((item) => (
				<ListTile item={item} />
			))}
		</div>
	);
}
