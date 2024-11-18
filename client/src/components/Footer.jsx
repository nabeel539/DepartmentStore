import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
        {/* Logo and Description */}
        <div>
          {/* <h2 className="text-3xl font-bold tracking-wide mb-4">
            FOREVER<span className="text-pink-400">.</span>
          </h2> */}
          <img src={assets.logo} className="w-36" alt="Logo" />
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <p className="text-sm">+1-212-456-7890</p>
          <p className="text-sm">contact@dstore.com</p>
        </div>
      </div>

      {/* Full-Width Horizontal Line and Copyright Information */}
      <div className="mt-12">
        <hr className="border-gray-200" />
        <p className="py-5 text-sm text-center text-gray-600">
          &copy; 2024 DStore.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
