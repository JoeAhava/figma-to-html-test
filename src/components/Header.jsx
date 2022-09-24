import React from "react";
import { FaIdBadge, FaBars } from "react-icons/fa";
export default function Header() {
	return (
		<nav className=" bg-transparent lg:bg-red-500 flex uppercase justify-around lg:justify-between text-red-500 lg:text-white font-bold px-1 py-2  lg:px-4 lg:py-3 rounded-md mb-2">
			<button onClick={() => {}} className="lg:hidden">
				<FaBars className="  w-6 h-6" />
			</button>
			<ul className=" hidden lg:flex flex-col lg:flex-row justify-evenly items-center h-full space-y-2 lg:space-x-4 lg:space-y-0 font-bold">
				<li className="">
					<a href="#">Home</a>
				</li>
				<div className=" w-px h-6 bg-white rotate-90 md:rotate-0 " />
				<li className="">
					<a href="#">Play All Lottery</a>
				</li>
				<div className=" w-px h-6 bg-white rotate-90 md:rotate-0 " />

				<li className="">
					<a href="#">Lottery Groups</a>
				</li>
				<div className=" w-px h-6 bg-white rotate-90 md:rotate-0 " />
				<li className="">
					<a href="#">Promotions</a>
				</li>
				<div className=" w-px h-6 bg-white rotate-90 md:rotate-0 " />
			</ul>
			<img
				src="/logo.png"
				alt="Logo for app"
				className=" lg:hidden w-36 md:w-64 h-16 mr-4"
			/>

			<button
				onClick={() => {}}
				className=" hidden lg:block p-0 lg:px-6 lg:py-1  bg-blue-500 rounded-full lg:rounded-md uppercase"
			>
				<label className=" ">My Account</label>
			</button>
			<button onClick={() => {}} className=" lg:hidden text-blue-500">
				<FaIdBadge className=" " size={40} />
			</button>
		</nav>
	);
}
