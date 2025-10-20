import I1 from "../../Img/I1.jpg"
import I2 from "../../Img/I2.jpg"
import I3 from "../../Img/I3.jpg"
import I4 from "../../Img/I4.jpg"
import I5 from "../../Img/I5.jpg"

import "../Css/Instagram.css"




export default function Instagram(){
    
    return <>
                <p className="latestDeal">Instagram</p>
                <hr className="hrCustomlatestDeal"/>
                <div className="InstagramImgs">
                    <img src={I1} alt="" className="pic" loading="lazy"/>
                    <img src={I2} alt="" className="pic" loading="lazy"/>
                    <img src={I3} alt="" className="pic" loading="lazy"/>
                    <img src={I4} alt="" className="pic" loading="lazy"/>
                    <img src={I5} alt="" className="pic" loading="lazy"/>
                </div>
    </>
}