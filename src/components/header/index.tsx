import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-24 bg-slate-300 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-24 sm:justify-between">
        <div className="flex justify-center items-center gap-4">
          <Link href="/">
            <h1 className="text-4xl flex gap-1 font-bold ">
              GameBoard<span className="text-purple-600 ">+</span>
            </h1>
          </Link>
          <div className="flex gap-4 justify-center items-center pt-2">
            <Link href="/"><span>Games</span></Link>
            <Link href="/profile"> <span>Profile</span></Link>
          </div>
        </div>

        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
}
