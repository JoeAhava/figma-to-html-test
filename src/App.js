import Banner from "./components/Banner";
import Draws from "./components/Draws";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GridView from "./components/GridView";
import Guide from "./components/Guide";
import Header from "./components/Header";
import HeaderLabel from "./components/HeaderLabel";
import ListView from "./components/ListView";
import SideBar from "./components/SideBar";
import Testimonial from "./components/Testimonial";
import TopBar from "./components/TopBar";
function App() {
	return (
		<main className=" flex">
			<aside className=" hidden lg:block w-52 xl:w-96">
				<SideBar />
			</aside>
			<article className=" lg:container lg:flex-grow">
				<TopBar />
				<Header />
				<Banner />
				<Guide />
				<Draws />
				<HeaderLabel title={"Play Upcomming Lotteries Online"} />
				<GridView />
				<div className=" grid grid-cols-1 lg:grid-cols-3 lg:flex-row space-x-2">
					<div className=" col-span-2">
						<HeaderLabel title="Biggest Lottery Winner" />
						<Testimonial />
					</div>
					<div className="">
						<HeaderLabel title="Our Latest Winners" />
						<ListView />
					</div>
				</div>
				<FAQ />
				<Footer />
			</article>
			<aside className="hidden lg:block w-32 xl:w-96"></aside>
		</main>
	);
}

export default App;
