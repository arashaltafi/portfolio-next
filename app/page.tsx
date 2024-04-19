import Header from "@/components/Header";
import Links from "@/components/Links";
import Main from "@/components/Main";

const Home = () => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-16 py-4">
      <Header />
      <Main />
      <Links />

      <div>
        <p>test 1</p>
        <p>test 2</p>
        <p>test 3</p>
        <p>test 4</p>
        <p>test 5</p>
      </div>
    </div>
  );
}

export default Home