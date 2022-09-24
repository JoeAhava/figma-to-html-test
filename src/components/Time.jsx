import React from "react";
import { FaClock } from "react-icons/fa";
export default function Time({ time }) {
	return (
		<h2 className="flex items-center space-x-2 text-xl">
			<FaClock /> <text> {time || "1:22:10"} </text>
		</h2>
	);
}
