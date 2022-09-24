import React from "react";

export default function ListTile({ item }) {
	return (
		<div
			className={`flex items-center space-x-2 border-2 border-slate-200 rounded-md ${
				item === 3 ? "border-b-0" : ""
			} px-4`}
		>
			<img
				src={"/winner.png"}
				alt="thumbnail"
				className=" w-14 h-14 rounded-full"
			/>
			<div className="flex flex-col">
				<h1 className=" font-semibold">{"20.11.2021"}</h1>
				<p className="flex items-center space-x-2 font-bold">
					{" "}
					<span className="w-4 h-4">
						<img src="/united-states.png" className=" w-4 h-4 object-cover" />
					</span>{" "}
					{"J.J Won P175"}
				</p>
				<p className=" font-light">{"in 7 N3 49 draw #13476"}</p>
			</div>
		</div>
	);
}
