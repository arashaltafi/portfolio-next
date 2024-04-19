import Header from "@/components/Header";
import Links from "@/components/Links";
import Main from "@/components/Main";

const Home = () => {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-16 py-4">
      <Header />
      <Main />
      <Links />
    </main>
  );
}

export default Home