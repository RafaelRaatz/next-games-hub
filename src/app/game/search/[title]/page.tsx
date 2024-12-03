import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/games";

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return res.json();
  } catch (err) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await getData(title);

  return (
    <div className="w-full text-black">
      <Container>
        <Input />
        <h1 className="font-bold text-xl mt-8 mb-5">
          see what we found in our gallery
        </h1>

        {!games && <p>game not found...</p>}

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <Card key={item.id} data={item} />)}
        </div>
      </Container>
    </div>
  );
}
