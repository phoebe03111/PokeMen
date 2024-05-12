import { useEffect, useState } from "react";
import OpenAI from "openai";
import { RingLoader } from "react-spinners";
import TutorCard from "@/components/TutorCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const NewSensei = () => {
  const profileData = JSON.parse(localStorage.getItem("newSensei"));
  const { gender, age, expertise } = profileData;

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt: `A ${age}-year-old ${gender} who is a ${expertise}, as a pokemon.`,
          n: 1,
          size: "1024x1024",
        });
        setImage(response.data[0].url);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    generateImage();

    return () => localStorage.removeItem("newSensei");
  }, []);

  return (
    <div className="container mx-auto p-12 flex justify-center items-center h-[80vh] mb-20">
      {loading ? (
        <RingLoader color="#FFF3CF" size={150} />
      ) : (
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold text-center text-primary">
            Your Card
          </h1>
          <TutorCard {...profileData} image={image} />

          <div className="flex flex-col items-center gap-4 mt-8">
            <Link to="/">
              <Button className="bg-white">Dashboard</Button>
            </Link>
            <Link>
              <Button className="bg-white">Homepage</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewSensei;
