import React from "react";

export default function SideBar() {
	return (
		<div className=" px-8 py-8 flex flex-col justify-evenly space-y-3">
			<h1 className=" text-2xl text-red-500 font-bold">Questions ?</h1>
			<p className=" text-2xl">Contact us By: </p>
			<p className=" font-bold text-xl">Skype: </p>
			<p className="">sales@mekashron.com </p>
			<p className=" text-l">or </p>
			<p className="  font-bold text-green-500 text-xl">WhatsApp:</p>
			<p>+972559461380</p>
		</div>
	);
}
