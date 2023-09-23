import { useLoaderData } from "react-router-dom";
import Phones from "../../Components/Phones/Phones";
import Banner from '../../Components/Header/Banner';

const Home = () => {
  const phones = useLoaderData();

  return (
    <>
    <Banner></Banner>
      <Phones phones={phones}></Phones>
    </>
  );
};

export default Home;
