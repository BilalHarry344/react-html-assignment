import React, { Fragment } from "react";
import HomeBanner from "../components/pages/home/HomeBanner";
import ReviewsCard from "../components/pages/home/ReviewsCard";
import RegisterFormBanner from "../components/pages/home/RegisterFormBanner";
import ThumbnailSlider from "../components/pages/home/ThumbnailSlider";

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeBanner />

      <ReviewsCard />

      <ThumbnailSlider />

      <RegisterFormBanner />
    </Fragment>
  );
};

export default Home;
