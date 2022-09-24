import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function GuideStep({
	title,
	desc,
	thumbnail,
	linkLabel,
	linkUrl,
}) {
	return (
		<div className=" border-2 pr-2 border-slate-100 relative flex items-center min-h-32 rounded-md space-x-2">
			<img
				src={thumbnail || "/laptop.png"}
				alt="Laptop"
				className=" w-20 h-20 px-1"
			/>
			<div>
				<h1 className=" font-bold text-lg pt-8 uppercase">{title}</h1>

				<p> {desc}</p>
			</div>
			<a
				href={linkUrl || "#"}
				className=" absolute top-0 right-0 flex items-center space-x-2 text-blue-500"
			>
				<p>{linkLabel}</p>
				<FaAngleDoubleRight />
			</a>
		</div>
	);
}
