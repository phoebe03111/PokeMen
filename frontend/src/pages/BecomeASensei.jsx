import TutorCard from "@/components/TutorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { tutors } from "@/constants";
import { IoIosSend } from "react-icons/io";

const BecomeASensei = () => {
  const tutorExample = tutors[0];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left */}
        <div className="p-8 flex flex-col gap-8 w-full lg:w-1/2">
          <h1 className="text-5xl text-primary font-bold">Hey sensei!</h1>
          <h2 className="text-5xl text-primary font-bold uppercase">
            We&apos;re turning you into a card!
          </h2>
          <TutorCard {...tutorExample} />
        </div>

        {/* Right */}
        <form className="flex-1 mb-20">
          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="name">Name</Label>
            <Input className="bg-transparent" />
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="gender">Gender</Label>
            <Input className="bg-transparent" />
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="age">Age</Label>
            <Input className="bg-transparent" />
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="summary">Who are you (Min 40 words)</Label>
            <Textarea className="bg-transparent" />
          </div>

          <Button>
            Generate <IoIosSend className="ml-2" size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BecomeASensei;
