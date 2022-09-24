import React, { useState } from "react";
import {
	FaFacebook,
	FaFacebookMessenger,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
export default function TopBar() {
	const [locale, setLocale] = useState("en");
	return (
		<div className=" hidden  lg:flex align-middle justify-between px-4 py-6">
			<div className="py-4 px-6 flex">
				<img src="/logo.png" alt="Logo for app" className=" w-72 h-34 mr-4" />
				<p>
					Welcome <b>Roma</b> -{" "}
					<button
						onClick={() => {}}
						className=" text-blue-500 bg-transparent border-none"
					>
						Logout
					</button>
					<br />
					Your balance: <b>P 0,00</b>{" "}
				</p>
			</div>
			<div className=" flex flex-col">
				<div className=" flex">
					<FaFacebook className=" text-blue-500 m-2" />
					<FaTwitter className=" text-sky-500 m-2" />
					<FaFacebookMessenger className=" text-blue-500 m-2" />
					<FaWhatsapp className=" text-green-500 m-2" />
				</div>
				<div className=" flex">
					<img
						src={locale === "en" ? "/united-states.png" : "/ethiopia.png"}
						alt="flag for locale"
						className=" w-7 h-6 mr-2"
					/>
					<select
						onChange={(e) => {
							setLocale(e.target.value);
						}}
					>
						<option value={"en"}>English</option>
						<option value={"am"}>Amharic</option>
					</select>
				</div>
			</div>
		</div>
	);
}
