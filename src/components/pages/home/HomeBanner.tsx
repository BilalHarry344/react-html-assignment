import { FC } from "react";
// constants
import { Banner_Profiles_Data } from "../../constants/mappedData";
// images
import BannerImg from "../../../assets/img/banner-image.png";
import SecondaryBorder from "../../../assets/img/secondary-border.svg";

const HomeBanner: FC = () => {
  return (
    <section className="main-banner container-wrapper display-flex">
      <div>
        <h1>
          Lorem ipsum
          <span className="secondary-text">
            dolor
            <img src={SecondaryBorder} alt="border" />
          </span>
          sit amet yo 👋
        </h1>

        <div className="scroll-slider">
          {Banner_Profiles_Data.map((item) => {
            const { id, image, name, detail } = item;
            return (
              <div className="display-flex card-component" key={id}>
                <div className="avatar-badge">
                  <img src={image} alt="profile" />
                </div>

                <div>
                  <h6>{name}</h6>
                  <p>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="responsive-img">
        <img src={BannerImg} alt="banner" />
      </div>
    </section>
  );
};

export default HomeBanner;
