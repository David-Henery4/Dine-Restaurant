import { Header, About, Cta, Menu, Services } from "@/sections";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-mob overflow-x-hidden lgMob:grid-cols-tab desk:grid-cols-lap lgDesk:grid-cols-desk">
      <Header />
      <About />
      <Menu />
      <Services />
      <Cta />
    </main>
  );
}
