import { FC } from "react";
// constants
import { Reviews_Data } from "../../constants/mappedData";

const ReviewsCard: FC = () => {
  return (
    <div className="reviews-responsive">
      <section className="reviews display-flex container-wrapper">
        {Reviews_Data.map((item) => {
          const { id, image, title, detail } = item;
          return (
            <div className="display-flex p3" key={id}>
              <div className="avatar-badge">
                <img src={image} alt="reviews-img" />
              </div>

              <div>
                <h6>{title}</h6>
                <p>{detail}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ReviewsCard;
