import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// constants, images
import { Thumbnail_Slider_Data } from "../../constants/mappedData";
import ChevronLeftIcon from "../../../assets/img/chevron-left.svg";
import ChevronRightIcon from "../../../assets/img/chevron-right.svg";
import PrimaryBorderImg from "../../../assets/img/primary-border.svg";

const ThumbnailSlider: FC = () => {
  const thumbnailSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: <img src={ChevronLeftIcon} alt="prev" className="slick-prev" />,
    nextArrow: <img src={ChevronRightIcon} alt="next" className="slick-next" />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container-wrapper trusted-section">
      <div className="text-center mb6">
        <h5>Trusted by</h5>
        <img src={PrimaryBorderImg} alt="border" />

        <p className="mt2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>

      <div className="logo-slider">
        <Slider {...thumbnailSliderSettings}>
          {Thumbnail_Slider_Data.map((item) => {
            const { id, image, altText } = item;
            return (
              <div className="slide-in-right slide" key={id}>
                <img src={image} alt={altText} className="logo-image" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ThumbnailSlider;
