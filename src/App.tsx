import { Suspense, useState } from "react";
import Hero from "./component/banner"
import Footer from "./component/footer"
import Nav from "./component/Nav"
import HeadingTech from "./component/Technologies/Heading"
import type { TechnologiesType } from "./type";
import Technologies from "./component/Technologies/Technologies";

const techFatch = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [techPromise] = useState(() => techFatch())
  return (
    <>
      <Nav />
      <Hero />
      <HeadingTech />
      <Suspense fallback={<h3 className=" mb-4 pb-4 bg-linear-to-r text-4xl
             from-orange-500 via-pink-500
             to-purple-600 bg-clip-text text-transparent 
             flex justify-center">Technologies Loading...</h3>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
      <Footer />

    </>
  )
}

export default App
