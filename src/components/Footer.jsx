import React from "react";
import {
	FaBitcoin,
	FaCcDinersClub,
	FaCcMastercard,
	FaCcStripe,
	FaCcVisa,
	FaFacebook,
	FaFacebookMessenger,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
	return (
		<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center space-x-2 md:space-y-4 justify-evenly pt-36 bg-gradient-to-b from-transparent to-gray-50">
			<img
				src="/bg.png"
				alt="background"
				className="w-full absolute top-0 h-64 opacity-60"
			/>
			<div className="">
				<div className="flex items-center space-x-2">
					<FaWhatsapp size={60} className="text-green-500" />
					<p className="flex flex-col">
						<b className="text-xl">Live Chat by WhatsApp</b>
						<small>Customer Service</small>
					</p>
				</div>
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 space-y-2">
					<h1 className="pt-4 font-semibold text-xl">Useful Links</h1>
					<li className="">
						<a href="#" className="text-sky-600">
							Lottery Results and Winners
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Lottery Promotions
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							About Us
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Contact Us
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Terms and Conditions
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Security
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Privacy Policy
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Acceptable Use Policy
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600">
							Website Use Policy
						</a>
					</li>
					<li className="">
						<a href="#" className="text-sky-600 font-bold">
							Affiliate Program
						</a>
					</li>
				</ul>
			</div>
			<div className="px-4 space-y-4">
				<h1 className="text-xl font-bold uppercase">SmartWinners</h1>
				<p>
					The trade name SmartWinners and all content on this website is a
					copyright of SmartWinners Limited. All rights reserved. We are an
					independent lottery ticket purchasing service. We are not affiliated
					with nor are we endorsed by any State sanctioned lottery organization.
					We make no claims on our site to be such.
				</p>
				<p className=" space-y-4">
					Our registered business address is Unit 6158, PO Box 6945, London, W1A
					6US, United Kingdom.
				</p>
			</div>
			<div className="grid grid-cols-1 space-y-4">
				<div className="flex items-center space-x-2">
					<FaFacebook className="text-blue-500" size={40} />
					<FaTwitter className="text-sky-600" size={40} />
					<FaFacebookMessenger className="text-blue-600" size={40} />
				</div>
				<div className=" space-y-4">
					<h1 className=" uppercase font-bold text-xl">Payment Methods</h1>
					<div className="grid grid-cols-3 grid-flow-dense space-x-0 space-y-0">
						<img src="/visa.png" alt="Credit Card brand" />
						<img src="/mastercard.png" alt="Credit Card brand" />
						<img src="/maestro.png" alt="Credit Card brand" />
						<img src="/dinersclub.png" alt="Credit Card brand" />
						<img src="/skrill.png" alt="Credit Card brand" />
						<img src="/bitcoin.png" alt="Credit Card brand" />
						<img src="/qcard.png" alt="Credit Card brand" />
						<img src="/postcard.png" alt="Credit Card brand" />
						<img src="/litecoin.png" alt="Credit Card brand" />
					</div>
				</div>
				<div className=" space-y-4">
					<h1 className=" uppercase font-bold text-xl">Security and Trust</h1>
					<div className="grid grid-cols-2 grid-flow-dense space-x-0 space-y-0">
						<img src="/security1.png" alt="Security brand" />
						<img src="/combosecure.png" alt="Security brand" />
					</div>
				</div>
			</div>
		</div>
	);
}
