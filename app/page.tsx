import Image from "next/image";
import Hero from "./_components/Hero";
import InfoBlock from "./_components/infoBlock";

export default function Home({ data }) {
  const heroheadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>hapiness.</h1>
    </>
  )

  const infoBlockData = {
    headline: "the experience",
    text: (
      <p className="mb-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam saepe nihil dolorum soluta assumenda beatae ad minima dignissimos quidem accusantium.</p>
    ),
    imgSrc: "/assets/surfers.jpeg",
    button: (
      <button className="bg-teal-500 rounded-full px-5 py-3 text-white capitalize text-2xl">Book Now</button>
    ),
    reversed: true
  }

  const infoBlock2Data = {
    headline: "the experience",
    text: (
      <p className="mb-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam saepe nihil dolorum soluta assumenda beatae ad minima dignissimos quidem accusantium.</p>
    ),
    imgSrc: "/assets/photo1.jpeg",
    button: (
      <button className="bg-teal-500 rounded-full px-5 py-3 text-white capitalize text-2xl">Book Now</button>
    ),
    reversed: false
  }


  return (
    <main className=" ">
      <Hero headline={heroheadline} imgSrc="/assets/hero1.jpg" />
      <InfoBlock data={infoBlockData} />
      <InfoBlock data={infoBlock2Data} />
    </main>
  );
}
