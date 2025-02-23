const Card = ({ image, title, heading, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-2xl py-4 px-6 text-center h-1/12">
        {image && <img src={image} alt={title} className="mx-auto mb-2 h-6" />}
        {/* <h2 className="text-gray-600 text-sm">{title}</h2> */}
        <h3 className=" text-2xl font-bold text-blue-900">{heading}</h3>
        <p className="text-gray-500 text-lg mt-2">{description}</p>
      </div>
    );
  };
  
  export default Card;
  