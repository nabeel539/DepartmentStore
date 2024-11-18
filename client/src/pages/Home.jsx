import Hero from "../components/Hero";
import Latestcollection from "../components/Latestcollection";
// import BestSeller from "../components/BestSeller";
import Ourpolicy from "../components/Ourpolicy";
import Newslaterbox from "../components/Newslaterbox";

const Home = () => {
  return (
    <>
      <Hero />
      <Latestcollection />
      {/* <BestSeller /> */}
      <Ourpolicy />
      <Newslaterbox />
    </>
  );
};
export default Home;
