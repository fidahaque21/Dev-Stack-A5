import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
    return (
        <nav className="sticky top-0 z-50  border-b border-gray-100 bg-white">
            <div className="container mx-auto flex h-18 items-center justify-between px-4">   
                <div>
                    <a href="/">
                        <img
                            src="/public/logo-text.png"
                            alt="Dev Stack"
                            className="w-28"
                        />
                    </a>
                </div>
  
                <div className="hidden md:flex items-center gap-7">
                    <a
                        href="#"
                        className="text-sm font-medium text-pink-600"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:text-pink-600"
                    >
                        Technologies
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:text-pink-600"
                    >
                        Projects
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:text-pink-600"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:text-pink-600"
                    >
                        Contact
                    </a>
                </div>

                
                <div className="hidden md:flex items-center gap-5">
                    <button className="text-sm cursor-pointer font-medium text-gray-600 hover:text-pink-600">
                        Sign In
                    </button>

                    <button className="rounded-full cursor-pointer bg-pink-600 px-5 py-2 text-sm font-medium text-white hover:bg-pink-700">
                        Sign Up
                    </button>
                </div>
                <div className="md:hidden">
                    <GiHamburgerMenu size={28} />
                </div>

            </div>
        </nav>
    );
};

export default Nav;