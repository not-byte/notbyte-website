import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-grey-lighter text-center lg:text-left mt-[30vh]">
      <div className="w-[80%] mx-auto px-4 py-12 md:py-24 flex justify-center flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h5 className="text-[rgba(240,132,97,1.00)] uppercase font-semibold mb-6 text-lg">
              About Us
            </h5>
            <p className="text-grey text-base leading-relaxed">
              Elevate your online presence with innovative solutions. Our
              mission is to empower your digital aspirations with cutting-edge
              technologies and creative design.
            </p>
            <div className="mt-8">
              <span className="text-grey text-base">Connect with us:</span>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/not_byte/"
                  className="text-[rgba(240,132,97,1.00)] hover:brightness-75 transition-[filter] duration-300"
                >
                  <FaInstagram size="24" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61556349384920"
                  className="text-[rgba(240,132,97,1.00)] hover:brightness-75 transition-[filter] duration-300"
                >
                  <FaFacebookF size="24" />
                </a>
                <a
                  href="https://www.linkedin.com/company/notbyte/"
                  className="text-[rgba(240,132,97,1.00)] hover:brightness-75 transition-[filter] duration-300"
                >
                  <FaLinkedinIn size="24" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNLeJesJFyJ4efbRfTWhwaw"
                  className="text-[rgba(240,132,97,1.00)] hover:brightness-75 transition-[filter] duration-300"
                >
                  <FaYoutube size="24" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-[rgba(129,81,156,1.00)] uppercase font-semibold mb-6 text-lg">
              Recent Posts
            </h5>
            <ul className="text-base space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[rgba(129,81,156,1.00)] transition-colors duration-300"
                >
                  Design Trends 2024
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgba(129,81,156,1.00)] transition-colors duration-300"
                >
                  UI/UX Best Practices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgba(129,81,156,1.00)] transition-colors duration-300"
                >
                  Web Accessibility Insights
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="text-[rgba(234,86,87,1.00)] uppercase font-semibold mb-6 text-lg">
              Contact Info
            </h5>
            <ul className="text-grey text-base space-y-3">
              <li>
                <FaPhone className="inline mr-2" />
                +123 456 7890
              </li>
              <li>
                <FaEnvelope className="inline mr-2" />
                info@example.com
              </li>
              <li>
                <FaMapMarkerAlt className="inline mr-2" />
                123 Main St, Anytown, USA
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="text-[rgba(240,132,97,1.00)] uppercase font-semibold mb-6 text-lg">
              Stay Updated
            </h5>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-3 bg-grey-darkest border-grey-darker focus:border-[rgba(240,132,97,1.00)] placeholder:text-grey-dark !text-white !ring-0 text-base"
              />
              <button
                type="submit"
                className="bg-colors hover:brightness-75 text-white px-4 py-3 transition-[filter] duration-300 corner-br corner-black"
              >
                Subscribe
              </button>
            </form>
            <p className="text-grey text-sm mt-4">
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>
        </div>

        <div className="text-center text-grey text-base pt-12 sm:pt-16 font-light">
          © {new Date().getFullYear()} notByte. Crafted with passion and
          precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
