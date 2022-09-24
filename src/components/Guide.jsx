import React from "react";
import GuideStep from "./GuideStep";

export default function Guide() {
	return (
		<div className=" py-4 px-2 md:px-4 flex flex-col space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row">
			<GuideStep
				title="You Pick"
				desc={
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae deleniti beatae laborum odio."
				}
				linkLabel="Play Now"
			/>
			<GuideStep
				title="We Buy"
				desc={
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae deleniti beatae laborum odio."
				}
				linkLabel="More Details"
				thumbnail="/lotteries.png"
			/>
			<GuideStep
				title="You Win !!!"
				desc={
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae deleniti beatae laborum odio."
				}
				linkLabel="Withdraw My Winnings"
				thumbnail="/money.png"
			/>
		</div>
	);
}
