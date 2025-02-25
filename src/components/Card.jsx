const Card = ({ image, title, heading, description }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-2xl p-6 text-center h-full">
      {image && <img src={image} alt={title} className="mx-auto mb-3 h-10 object-contain" />}
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 flex-1">{heading}</h3>
      <p className="text-gray-500 text-md md:text-lg mt-2 flex-1">{description}</p>
    </div>
  );
};

export default Card;
