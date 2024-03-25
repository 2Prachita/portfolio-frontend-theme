import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Star from "@/components/main/Star";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Star/>
        <Skills/>
        <Encryption/>
        <Projects/>
      </div>
    </main>
  );
}
