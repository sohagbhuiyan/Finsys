const Download = ({ image, heading }) => {

    return ( 
 <>
    <div className="bg-white flex justify-between shadow-lg rounded-xl p-2 items-center">
    {image && <img src={image} alt="icon" className="mx-auto h-8" />}
    <h3 className=" ml-2 text-xs md:text-md font-medium text-blue-900 hover:text-blue-400 cursor-pointer">{heading}</h3> 
    </div>
 </>
    );
  };
  
  export default Download;