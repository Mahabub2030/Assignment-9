import Header from "../Pages/Shrared/Header/Header";
import LeftSideNav from "../Pages/Shrared/LeftSideNav/LeftSideNav";
import NavBar from "../Pages/Shrared/NavBar/NavBar";
import RidSideNav from "../Pages/Shrared/RideSideNav/RidSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
        return (
                <div>
                        <Header></Header>
                        <BreakingNews></BreakingNews>
                        <NavBar></NavBar>
                       
                       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="border">
                                <LeftSideNav></LeftSideNav>
                        </div>
                        <div className=" md:col-span-2 border">
                                <h2 className="text-4xl">News Comimg Soon.....</h2>
                        </div>
                        <div className="border">
                                <RidSideNav></RidSideNav>
                        </div>
                       </div>
                </div>

        );
};

export default Home;