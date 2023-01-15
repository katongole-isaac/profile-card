import "./styles/card.styles.css";

import cardTopBg from "../instructions/images/bg-pattern-top.svg";
import cardBottomBg from "../instructions/images/bg-pattern-bottom.svg";
import VictorAvatar from "../instructions/images/image-victor.jpg";
import cardBg from "../instructions/images/bg-pattern-card.svg";
const Card = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-top-section">
          <img src={VictorAvatar} alt="" />
        </div>
        <div className="card-bg-section">
          <img src={cardBg} alt="" />
        </div>

        <div className="card-content">
          <div></div>
          <div className="card-username">
            <div>
              <span className="username">Victor Crest</span>
              <span className="count"> 26</span>
            </div>
            <span className="user-count"> London</span>
          </div>
          <div className="card-ratings">
            <div>
              <span className="followers"> 80K</span>
              <span>Followers</span>
            </div>
            <div>
              <span className="likes"> 803k</span>
              <span>Likes</span>
            </div>
            <div>
              <span className="photos">1.4k</span>
              <span>Photos</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
