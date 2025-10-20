import Rectangle21 from "../../Img/Rectangle21.png";
import B18 from "../../Img/B18.jpg";

import "../Css/FourthCom.css";

export default function FourthCom() {
  return (
    <>
      <p className="latestDeal">Recent News</p>
      <hr className="hrCustomlatestDeal" />
      <div className="RecentNewsParent">
        <div className="RecentNewsDes">
          <p className="RecentNewsTitle">
            Where To Travel <br />
            <span className="RecentNewsSpan">
              Matoa Where To <br />
              Travel? Yogyakarta
            </span>
          </p>
          <button type="button" className="RecentNewsBtn btn-outline">
            Discover
          </button>
        </div>
        <div className="RecentNewsImg">
          <img src={Rectangle21} alt="" className="backgroundImg" loading="lazy"/>
          <img src={B18} alt="" className="RecentNewsPic" loading="lazy"/>
        </div>
      </div>
    </>
  );
}
