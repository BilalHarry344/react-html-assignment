import { FC } from "react";
// constants
import RegisterBannerImg from "../../../assets/img/form-banner-image.png";
import RegisterForm from "./RegisterForm";

const RegisterFormBanner: FC = () => {
  return (
    <section className="container-wrapper display-flex register-section">
      <div className="responsive-img">
        <img src={RegisterBannerImg} alt="banner" />
      </div>

      <RegisterForm />
    </section>
  );
};

export default RegisterFormBanner;
