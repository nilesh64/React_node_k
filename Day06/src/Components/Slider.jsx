import "./Banner.css"; 
const Slider = () => {
  return (
    
      <div className="slider relative w-full h-60 overflow-hidden">
      
          <div className="slides flex w-[300%] animate-slide">
              <div className="slide w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                  Sale Up to 50% Off!
              </div>
              <div className="slide w-full h-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white text-2xl">
                  New Arrivals!
              </div>
              <div className="slide w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl">
                  Exclusive Deals!
              </div>
          </div>
      </div>
  );
};

export default Slider;

 
 