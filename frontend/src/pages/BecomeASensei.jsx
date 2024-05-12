import TutorCard from "@/components/TutorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { tutors } from "@/constants";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BecomeASensei = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [expertise, setExpertise] = useState("");
  const [description, setDescription] = useState("");

  const handleGenerate = () => {
    localStorage.setItem(
      "newSensei",
      JSON.stringify({
        name,
        gender,
        age,
        expertise,
        description,
      })
    );
    navigate("/new-sensei");
  };

  const tutorExample = tutors[0];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
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
            <Input
              className="bg-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="gender">Gender</Label>
            <Select value={gender} onValueChange={(value) => setGender(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="age">Age</Label>
            <Input
              className="bg-transparent"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="expertise">Expertise</Label>
            <Input
              className="bg-transparent"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="description">Who are you (Min 40 words)</Label>
            <Textarea
              className="bg-transparent"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button onClick={handleGenerate} className="mt-4">
            Generate <IoIosSend className="ml-2" size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BecomeASensei;
