import React from "react";

export default function HeaderLabel({ title }) {
	return (
		<div className="py-1 px-4 bg-red-500 text-xl my-2 text-center w-full text-white font-bold">
			<h1 className=" uppercase">{title}</h1>
		</div>
	);
}
