import { Header, About, Cta, Menu, Services } from "@/sections";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab smLap:grid-cols-lap">
      <Header />
      <About />
      <Menu />
      <Services />
      <Cta />
    </main>
  );
}
