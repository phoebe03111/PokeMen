import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="container mx-auto p-8 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" width={40} />
          <span className="font-bold text-2xl">Pokemon</span>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/become-a-sensei"
          className={`md:text-lg ${
            pathname === "/become-a-sensei" && "font-bold"
          }`}
        >
          Become a Sensei
        </Link>
        <Link to="/login" className="md:text-lg">
          Log In
        </Link>
      </div>
    </header>
  );
};

export default Header;
