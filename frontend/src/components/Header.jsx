import { Link } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  return (
    <header className="container mx-auto p-8 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" width={40} />
          <span className="font-bold text-2xl">Pokemon</span>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/become-a-tutor" className="md:text-xl">
          Become a Tutor
        </Link>
        <Link to="/login" className="md:text-xl">
          Log In
        </Link>
      </div>
    </header>
  );
};

export default Header;
