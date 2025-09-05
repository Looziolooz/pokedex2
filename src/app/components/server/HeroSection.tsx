import RandomButton from "../client/RandomButton";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-4 bg-gradient-to-br from-purple-400 via-purple-300 to-blue-300 p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <RandomButton />
      </section>
  );
}