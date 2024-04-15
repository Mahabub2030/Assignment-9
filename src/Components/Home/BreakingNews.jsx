import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
        return (
                <div>
                        <div className="flex">
                                <div className="btn btn-secondary">Breakin News</div>
                                <Marquee pauseOnHover={true} >
                                        <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just some text.</Link>
                                        <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just some text.</Link>
                                        <Link className="mr" to='/'>I can be a React component, multiple React components, or just some text.</Link>
                                        <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just some text.</Link>
                                </Marquee>
                        </div>
                </div>
        );
};

export default BreakingNews;