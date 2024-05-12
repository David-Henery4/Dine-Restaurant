import { Header, About, Cta, Menu, Services } from "@/sections";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-mob">
      <Header/>
      <About/>
      <Menu/>
      <Services/>
      <Cta/>
    </main>
  );
}
