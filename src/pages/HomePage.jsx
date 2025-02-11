import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import Events from "../components/Events/Events";
import Indexproductlist from "./Indexproductlist/Indexproductlist";
import Latestinformation from "./Latestinformation";
import Homeabout from "./HomeAbout/Homeabout";
import MetaTags from "../components/Metatag/MetaTags";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <MetaTags
        title="Home | Bioplentypeps"
        canonicalUrl="https://www.bioplentypeps.com/"
      />
      <Hero />
      <Categories />
      <Indexproductlist />
      <Events />
      <Homeabout />
      <Latestinformation />
    </div>
  );
};

export default HomePage;
