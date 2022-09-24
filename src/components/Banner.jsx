import React from "react";

export default function Banner() {
	return (
		<div className="mt-4 w-screen lg:w-full h-auto md:h-96">
			<img
				src="/banner.png"
				alt="Banner"
				className=" w-full h-full object-cover"
			/>
		</div>
	);
}
