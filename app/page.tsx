import Image from "next/image";
import Hero from "./_components/Hero";

export default function Home() {
  const heroheadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>hapiness.</h1>
    </>
  )

  return (
    <main className=" ">
      <Hero heroheadline="" />
    </main>
  );
}
