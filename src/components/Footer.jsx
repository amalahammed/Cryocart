import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-8">

          <div>
            <h3 className="text-white font-semibold mb-4">Crayocart</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Gadgets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Jewellery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Fashion Clothes
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-4">Download App</h3>
            <div className="flex flex-row sm:flex-col items-start sm:items-start gap-4">
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 sm:h-12 w-auto transition transform hover:scale-105"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-12 w-auto transition transform hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>

   
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CryoCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
