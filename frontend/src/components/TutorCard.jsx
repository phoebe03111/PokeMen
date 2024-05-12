/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TutorCard = ({
  id,
  name,
  image,
  review = 0,
  totalReviews = 0,
  expertise,
  description,
  cardPrice = 0,
  rate = 0,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      className="bg-black text-white border border-primary w-[300px] h-[540px] cursor-pointer hover:scale-105"
      onClick={() => navigate(`/sensei-profile/${id}`)}
    >
      <CardHeader>
        <div className="relative">
          <img
            src={image}
            alt="tutor"
            className="rounded-2xl w-64 h-64 object-cover"
          />
          <p className="text-white drop-shadow-md absolute bottom-3 left-4 z-10 font-bold text-2xl">
            {name}
          </p>
          <FaRegHeart size={25} className="absolute right-3 top-3" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FaStar color="yellow" size={20} /> {review} ({totalReviews} Reviews)
        </div>
        <div className="italic">
          <span className="uppercase font-bold">{expertise}:</span>{" "}
          {description}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start">
        <p>Card: ${cardPrice}</p>
        <p>Rate: ${rate}/h</p>
      </CardFooter>
    </Card>
  );
};

export default TutorCard;
