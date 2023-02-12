import { Link } from "react-router-dom";

const Notfoundpage = () => {
    return (
        <div className="">
            This page doesn't exist. Go <Link to="/login">Login</Link>
        </div>
    );
};

export default Notfoundpage;