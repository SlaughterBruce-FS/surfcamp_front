import Image from "next/image";
import Hero from "./_components/Hero";
import InfoBlock from "./_components/infoBlock";
import axios from "axios";
import { fetchArticlesData, fetchStraiData, processInfoBlocks } from "@/utils/utils";
import BlogFront from "./_components/Featureditems/BlogFront";

interface InfoBlock {
  id: number,
  __component: string,
  headline: string,
  slug: string,
  paragraph: string,
  islandscape: boolean,
  imageshowright: boolean,
  imageCaption: string,
  exerpt: string,
  featuredImage: string,
  image: {
    data: {
      id: number,
      attributes: {
        url: string,
      }
    },
    component?: string
  },
  textc: string,
  text: string,
  button: {
    slug: string,
    text: string,
  },
  reversed: string,
  imgSrc: string


}

export default async function Home() {

  const data = await fetchStraiData('infoblocks-landing?populate=deep');
  // console.log(data);

  const infoBlockData = processInfoBlocks(data);

  const articles = await fetchArticlesData();


  const heroheadline: React.ReactNode = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>hapiness.</h1>
    </>
  )




  return (
    <main className=" ">
      <Hero headline={heroheadline} imgSrc="/assets/hero1.jpg" />

      {infoBlockData.map((data: InfoBlock) => <InfoBlock key={data.id} data={data} />)}

      <BlogFront items={articles} />
    </main>
  );
}
