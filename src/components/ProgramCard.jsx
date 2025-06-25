const ProgramCard = ({ title, description, image, link }) => {
  return (
    <div className="group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-[#n 59098c]">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* <a
          href={link}
          className="inline-block px-4 py-2 bg-[#8536b6] text-white rounded-md hover:bg-[#59098c] transition"
        >
          Learn More
        </a> */}
      </div>
    </div>
  );
};

export default ProgramCard;
