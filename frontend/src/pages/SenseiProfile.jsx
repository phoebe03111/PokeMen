import ReviewCard from "@/components/ReviewCard";
import TutorCard from "@/components/TutorCard";
import { Button } from "@/components/ui/button";
import { tutors } from "@/constants";
import { useParams } from "react-router-dom";

const SenseiProfile = () => {
  const { senseiId } = useParams();
  console.log(senseiId);

  const data = tutors.find((tutor) => tutor.id == senseiId);

  return (
    <div className="container mx-auto p-12">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left */}
        <div className="p-8 flex flex-col gap-8 w-full lg:w-1/2">
          <h1 className="text-primary text-5xl font-bold">
            A passionate product designer who loves pushing ideas from concept
            into reality
          </h1>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary text-lg">
              Lesson Location
            </h3>
            <div className="border border-primary w-fit px-4 py-2 rounded-3xl">
              In person / Online
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary text-lg">
              About Your Sensei
            </h3>
            <div>
              As a designer and a collaborator, Ayden is dedicated to pushing
              the boundaries of digital design to create products that make
              learning and skill development accessible, fun, and rewarding for
              everyone.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary text-lg">Reviews</h3>
            <div className="flex flex-col gap-4">
              <ReviewCard
                name="Bobinski"
                review="I loved learning product design from Ayden. He really helped me get better at understanding how to identify and fix the problem."
              />
              <ReviewCard
                name="Carianas"
                review="I really enjoyed seeing how a product can be taken from mind to reality! Thanks!"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-8 flex-1 mb-20">
          <TutorCard {...data} />

          <div className="flex flex-col gap-4">
            <Button>Book a video call</Button>
            <Button>Get card</Button>
            <Button>Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenseiProfile;
