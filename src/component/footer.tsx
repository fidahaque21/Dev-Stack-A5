const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="container mx-auto px-6 py-12 md:px-10 lg:px-16">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    <div>

                        <img
                            src="/public/logo-text.png"
                            alt="DevStack"
                            className="h-10 w-auto"
                        />


                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <div className="mt-6 flex gap-5">
                            <a
                                href="#github"
                                className="text-sm font-medium text-gray-700 transition hover:text-purple-600"
                            >
                                GitHub
                            </a>

                            <a
                                href="#Twitter"
                                className="text-sm font-medium text-gray-700 transition hover:text-purple-600"
                            >
                                Twitter
                            </a>

                            <a
                                href="#LinkedIn"
                                className="text-sm font-medium text-gray-700 transition hover:text-purple-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-gray-900">
                            Product
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#Home"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Home
                            </a>

                            <a
                                href="#technologies"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Technologies
                            </a>

                            <a
                                href="#projects"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Projects
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-gray-900">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#about"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                About
                            </a>

                            <a
                                href="#contact"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Contact
                            </a>

                            <a
                                href="#careers"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Careers
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-gray-900">
                            Legal
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#privacy-policy"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#terms-of-service"
                                className="text-sm text-gray-500 transition hover:text-purple-600"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">

                    <p className="text-sm text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-7">
                        <a
                            href="#privacy-policy"
                            className="text-sm text-gray-400 transition hover:text-gray-700"
                        >
                            Privacy
                        </a>

                        <a
                            href="#terms-of-service"
                            className="text-sm text-gray-400 transition hover:text-gray-700"
                        >
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;