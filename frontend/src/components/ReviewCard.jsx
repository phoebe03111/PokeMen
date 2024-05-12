/* eslint-disable react/prop-types */
const ReviewCard = ({ name, review }) => {
  return (
    <div className="border border-primary rounded-3xl p-4">
      <div className="flex items-center gap-2">
        <div className="bg-[#99FF88] text-black font-semibold w-8 h-8 rounded-full flex justify-center items-center">
          {name.substring(0, 1)}
        </div>
        <p>{name}</p>
      </div>

      <p className="mt-3">{review}</p>
    </div>
  );
};

export default ReviewCard;
