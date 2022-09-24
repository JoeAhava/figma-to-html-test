import React from "react";
import { FaChevronDown } from "react-icons/fa";
export default function FAQ() {
	return (
		<div className="py-8">
			<h1 className="font-bold text-2xl uppercase">
				Frequently Asked Questions (F.A.Q)
			</h1>
			<ul className=" font-bold space-y-4 text-xl py-4">
				<li className=" text-sky-600 border-b-2 border-slate-200 pb-4 flex items-center justify-between">
					<a href="#">Can I play the lottery online ?</a>
					<FaChevronDown />
				</li>
				<li className=" text-sky-600 border-b-2 border-slate-200 pb-4 flex items-center justify-between">
					<a href="#">How will I get my wins ?</a>
					<FaChevronDown />
				</li>
				<li className=" text-sky-600 border-b-2 border-slate-200 pb-4 flex items-center justify-between">
					<a href="#">Is it safe to play lottery online ?</a>
					<FaChevronDown />
				</li>
			</ul>
		</div>
	);
}
