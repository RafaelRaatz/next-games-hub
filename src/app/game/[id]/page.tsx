import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { Card } from "@/components/card";

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    );
    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

async function getRecommendedGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );

    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

export default async function Game({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await getData(id);
  const recommendedGame: GameProps = await getRecommendedGame();

  if (!data) {
    redirect("/");
  }

  return (
    <div className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-50"
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-5">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataform</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categories</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Release Data:</strong> {data.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Recommended game</h2>

        <div className="flex">
          <div className="flex-grow">
            <Card data={recommendedGame} />
          </div>
        </div>
      </Container>
    </div>
  );
}
