import Hero from "@/components/Hero"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto min-w-full">
      <div className="w-full">
        <Hero />
        <Contact />
      </div>
    </main>
  );
}
