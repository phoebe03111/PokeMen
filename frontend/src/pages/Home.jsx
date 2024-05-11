import TutorCard from "@/components/TutorCard";
import { Input } from "@/components/ui/input";
import { searchCategories, tutors } from "@/constants";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <main className="container mx-auto p-12">
      {/* Hero section */}
      <motion.section className="h-[40vh] flex items-center justify-center">
        <h1 className="text-5xl font-bold flex flex-col gap-8 items-center capitalize text-primary">
          <span>Find the </span>
          <motion.span
            animate={{ opacity: 1, rotate: 360 }}
            initial={{ opacity: 0, scale: 1.5 }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            right person
          </motion.span>
        </h1>
      </motion.section>

      {/* Search section */}
      <section className="container mx-auto flex flex-col items-center gap-12">
        <div className="relative flex items-center w-full md:w-2/3">
          <Input
            placeholder="What do you want to learn?"
            className="rounded-[30px] bg-gray-600 text-white pl-10 pr-4 py-6 text-base placeholder:text-white"
          />
          <CiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            size={23}
            color="#FFF3CF"
            fontWeight="bold"
          />
        </div>

        <div className="bg-gray-400 w-full flex flex-wrap justify-center text-white rounded-[30px] p-6 shadow-custom">
          {searchCategories.map((category) => (
            <div key={category} className="mr-4 font-semibold">
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Cards section */}
      <section className="flex items-center flex-wrap gap-4 my-12">
        {tutors.map((tutor, index) => (
          <TutorCard key={tutor.id + index} {...tutor} />
        ))}
      </section>
    </main>
  );
};

export default Home;
