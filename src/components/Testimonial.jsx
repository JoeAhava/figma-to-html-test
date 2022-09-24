import React from "react";

export default function Testimonial() {
	return (
		<div className="flex flex-col items-center space-y-4 py-4 rounded-md border-t-2 border-r-2 border-l-2 border-slate-200 border-b-0">
			<div className="flex text-xl font-bold space-x-2 uppercase">
				<img src="/startlotto.png" alt="Star" className=" w-8 h-8" />
				<h1>
					Won{" "}
					<text className="font-bold text-sky-700 text-xl">$ 100 000 000</text>
				</h1>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 items-center space-x-4">
				<div className="col-span-2 flex flex-col items-center flex-grow px-2">
					<img
						src="/testimony.png"
						alt="Testimonial"
						className=" w-full h-auto"
					/>
					<div className="flex flex-col items-stretch">
						<div className="py-2 flex items-stretch space-x-2">
							<p className="uppercase font-bold text-lg">UK lotto results :</p>
							<span className="flex space-x-4">
								<span className=" rounded-full bg-red-500 text-white p-2">
									07
								</span>
								<span className=" rounded-full bg-red-500 text-white p-2">
									07
								</span>
								<span className=" rounded-full bg-red-500 text-white p-2">
									07
								</span>
								<span className=" rounded-full bg-red-500 text-white p-2">
									07
								</span>
							</span>
						</div>
						<p className=" place-self-end font-semibold">Date: 20. 11. 2021</p>
					</div>
				</div>
				<div className="flex flex-col py-4 px-2 space-y-6">
					<h1 className=" font-bold"> Shaun Vincent a Lottery Winner</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
						voluptatum eveniet dolorum, at repellendus quae reiciendis!
					</p>

					<a href="#" className="text-sky-600 underline font-bold self-center">
						Read the full story
					</a>
					<button
						onClick={() => {}}
						className=" py-2 px-4 bg-yellow-300 font-bold rounded-md"
					>
						Play Now
					</button>
				</div>
			</div>
		</div>
	);
}
