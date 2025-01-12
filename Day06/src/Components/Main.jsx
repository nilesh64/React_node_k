import CardComponent from './CardComponents';
import products from '../Utility/data';
import Slider from './Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Form from './Form';


const Main = () => {
  
  return (
    <>

      <ul className="flex flex-wrap justify-center items-center gap-6 font-serif h-12 text-indigo-700 bg-gray-100 shadow-md">
        {['Headphone', 'Mobile', 'Laptop', 'Home', 'Camera', 'Accessories', 'Watch'].map((item, index) => (
          <li
            key={index}
            className="text-lg hover:text-indigo-500 transition-transform duration-200 transform hover:scale-110 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>


      <Slider />


      <div className="flex justify-between items-center px-8 bg-gradient-to-r from-purple-500 to-purple-700 py-2 shadow-md">
        <a
          href="post"
          className="text-xl text-white font-bold hover:text-blue-600 hover:underline font-serif transition"
        >
          Electronic Products
        </a>
        <a
          href="post"
          className="text-xl text-white font-bold hover:text-blue-600 hover:underline font-serif transition"
        >
          View More...
        </a>
      </div>


      <div className=" fixed top-50% right-0 flex flex-col h-36 z-50  ">
        <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-m py-4 px-6 rounded-full border-2 flex items-center gap-2">
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          
        </button>
        <button className="bg-white text-purple text-m py-4 px-6 rounded-full border-2 flex items-center gap-2">
          <FontAwesomeIcon icon={faShoppingCart} className="text-purple" />
          
        </button>

      </div>



      <div className="px-8 mt-10">
        <CardComponent contacts={products} />
      </div>


      <h3 className="text-lg p-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 font-bold text-white mb-4">Featured Products</h3>
      <div className="px-4 py-6 flex justify-center items-center bg-gray-100">

        <div className="flex flex-wrap justify-center gap-6 ">
          {products.slice(0, 6).map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-48 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-100% rounded-t-md"
              />
              <h4 className="text-base font-medium mt-2 text-gray-800">{product.name}</h4>
              <p className="text-sm text-gray-600 mt-1">Price: {product.price}</p>
              <a
                href="#"
                className="text-indigo-600 text-sm font-semibold mt-2 inline-block hover:underline"
              >
                View Details
              </a>

            </div>

          ))}
        </div>
         
      </div>
      <Form/>
    </>
  );
};

export default Main;