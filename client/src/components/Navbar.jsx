import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="text-5xl font-bold hover:cursor-pointer">
        Raki<span className="text-logoGreen">bul</span>
      </div>
      <div>
        <ul className="flex gap-20">
          <li className="font-semibold text-grayText">
            <Link to="">Jobs</Link>
          </li>
          <li className="font-semibold text-grayText">
            <Link to="account">Acount</Link>
          </li>
          <li className="font-semibold text-grayText">
            <Link to={"about"}>About</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-logoGreen px-5 py-3 rounded-2xl text-myWhite">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
