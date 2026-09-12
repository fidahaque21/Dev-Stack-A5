const Hero = () => {
    return (
        <section className="mt-20 flex items-center">
            <div className="container mx-auto px-1">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#10182B]">
                            Build Your Ideal <br />
                            <span className="bg-linear-to-r  from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-lg bg-linear-to-r  from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                                Explore Technologies
                            </button>

                            <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-600 transition hover:bg-gray-100">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="/public/banner-stack.png"
                            alt="Development Stack"
                            className="w-full max-w-lg object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;