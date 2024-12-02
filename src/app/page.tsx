import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

async function getRandomGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

async function getListGames() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });

    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

export default async function Home() {
  const randomGame: GameProps = await getRandomGame();
  const listGame: GameProps[] = await getListGames();

  return (
    <main className="w-full ">
      <Container>
        <Link href={`/game/${randomGame.id}`}>
          <div className="w-full bg-black rounded-lg mt-8">
            <div className="w-full max-h-[550px] h-[550px] relative rounded-lg ">
              <div className="absolute z-20 justify-center items-center right-0 bottom-0 p-6">
                <h1 className="text-center font-bold text-4xl text-white mb-4">
                  We have an exclusive <br /> game for you!
                </h1>
                <div className="flex gap-2 items-center justify-center">
                  <p className="font-bold text-xl text-white">
                    {randomGame.title}
                  </p>
                  <BsArrowRightSquare size={24} color="#fff" />
                </div>
              </div>

              <Image
                src={randomGame.image_url}
                alt={randomGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-[550px] object-cover rounded-lg opacity-30 hover:opacity-60 transiton-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </div>
        </Link>
        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5">New Games</h2>

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listGame.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </main>
  );
}
