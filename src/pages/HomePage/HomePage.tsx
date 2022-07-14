import { FunctionComponent } from "react";
import Hero from "../../components/Hero";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {

  return (
    <div className="h-full w-full bg-black grid grid-rows-hero-content">
      <Hero />
      <div className="text-5xl text-white">Hello</div>
    </div>
  );
};

export default Home;
