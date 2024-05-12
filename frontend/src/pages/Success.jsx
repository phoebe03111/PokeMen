import { Button } from "@/components/ui/button";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container mx-auto p-12">
      <div className="text-5xl font-bold text-primary flex flex-col items-center gap-8">
        <p>Thank you!</p>
        <p>Your sensei will be in touch soon</p>

        <div className="mt-8">
          <img src={logo} alt="logo" width={200} />
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <Link to="/">
            <Button className="bg-white">Dashboard</Button>
          </Link>
          <Link>
            <Button className="bg-white">Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
