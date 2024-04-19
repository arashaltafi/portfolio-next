import About from "@/components/About";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Main from "@/components/Main";
import ProgressBar from "@/components/ProgressBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-16 py-4">
      <ProgressBar />
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