import About from "@/components/About";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="md:snap-y md:snap-proximity w-full h-screen px-2 sm:px-4 md:px-8 xl:px-16 py-4 overflow-x-hidden">
      {/* <ProgressBar /> */}
      <Header />
      <Main />
      <Links />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home