import RandomButton from "../client/RandomButton";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
      <h1 className="text-center mt-14 text-6xl md:text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
        Gotta catch `em all!
      </h1>
      <p className="text-center text-white text-lg md:text-xl max-w-2xl">
        Discover, search and explore the amazing world of Pokémon. Find your favourite and learn about their stats.
      </p>
      <RandomButton />
    </section>
  );
}