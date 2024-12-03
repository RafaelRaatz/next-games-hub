import { Container } from "@/components/container";
import { FaShareAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - GameBoard+",
  description: "perfil game center",
  keywords: ["games", "jogos", "steam"],
};

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row bg-slate-300 p-4 rounded-md">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <FaCircleUser size={150} color="#374151" />

            <h1 className="font-bold text-2xl">UserName</h1>
          </div>

          <div className="sm:absolute top-4 right-4 gap-3 flex items-center justify-center mt-2">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configuration
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              <FaShareAlt size={24} color="white" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
