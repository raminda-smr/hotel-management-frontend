import { FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-12">
            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <img src="/Leonine_Logo.png" alt="LOGO" className="w-full mb-3" />
                    <p className="text-gray-400 text-sm mb-4 text-justify">Leonine Villa offers the ultimate beachside escape. Our villa is a sanctuary of relaxation and luxury, with every detail crafted to provide an unforgettable experience.</p>

                    <div className="flex justify-between mt-6 text-xl">
                        <Link to="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                            <FaTwitter />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                            <FaYoutube />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                            <FaLinkedin />
                        </Link>
                    </div>

                </div>

                <div>
                    <h2 className="text-xl font-medium mb-4">Quick Links</h2>
                    <ul className="space-y-2 font-medium">
                        <li><Link to="#" className="text-gray-400 flex items-center hover:text-white"><FaChevronRight className="text-sm mr-2" /> Home</Link></li>
                        <li><Link to="#" className="text-gray-400 flex items-center hover:text-white"><FaChevronRight className="text-sm mr-2" /> About Us</Link></li>
                        <li><Link to="#" className="text-gray-400 flex items-center hover:text-white"><FaChevronRight className="text-sm mr-2" /> Services</Link></li>
                        <li><Link to="#" className="text-gray-400 flex items-center hover:text-white"><FaChevronRight className="text-sm mr-2" /> Contact</Link></li>
                        <li><Link to="#" className="text-gray-400 flex items-center hover:text-white"><FaChevronRight className="text-sm mr-2" /> FAQs</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mb-4">Contact Us</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <div className="icon-box flex items-center group">
                                <div className="icon mr-4 bg-gray-700 p-3 rounded-full group-hover:bg-gray-900">
                                    <FaPhoneAlt />
                                </div>
                                <div className="content">
                                    <div>(123) 456-7890</div>
                                    <div>(123) 456-7890</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="icon-box flex items-center group">
                                <div className="icon mr-4 bg-gray-700 p-3 rounded-full group-hover:bg-gray-900">
                                    <FaEnvelope />
                                </div>
                                <div className="content">
                                    <div>info@company.com</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="icon-box flex items-center group">
                                <div className="icon mr-4 bg-gray-700 p-3 rounded-full group-hover:bg-gray-900">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="content">
                                    <div>1234 Street Name, City, State, Country</div>
                                </div>
                            </div>
                        </li>
                       
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mb-4">Our Location</h2>
                    <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509424!2d144.95565131568325!3d-37.817323979751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e00f47bf%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1617748377295!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Company Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8 py-6 border-t border-gray-700">
                &copy; 2024 Leonine Villa. All rights reserved.
            </div>
        </footer>
    );
}
