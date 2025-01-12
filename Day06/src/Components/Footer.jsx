const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
 
          <div className="text-lg font-serif text-white">
            <span className="text-indigo-500 font-bold">e</span>Store
          </div>
  
 
          <ul className="flex gap-4 text-sm">
            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
              <li key={index} className="hover:text-indigo-400 transition">
                <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
  
 
          <div className="flex gap-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} TechStore. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  