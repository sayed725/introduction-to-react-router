import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="flex flex-col gap-11">
      <h2 className="text-4xl font-bold">My Website</h2>
      <hr />
      <div className="flex gap-10 justify-center font-bold text-blue-600 mb-10 text-2xl a.active">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/about">About</NavLink>

        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
