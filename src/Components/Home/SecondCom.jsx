import ManClothes from "../../Img/ManClothes.png";
import WomenClothes from "../../Img/WomenClothes.png";

import "../Css/SecondCom.css";

export default function SecondCom() {
    return (
        <>
            <div className="comCard">
                <div className="firstCard">
                    <p className="TitleCard">Casual Cotton <span className="spanCard"> Polo T Shirt</span></p>
                    <p className="DesCard"> Mens golf polo shirt perfect for traveling; <br />
                     daily wears for working, dating, parties,
                      a go-to shirt for office or weekend， <br />
                      wearing this polo T-shirts will have people looking sharp <br /> and full of confidence</p>
                    <p className="DiscoverCard">Discover Now</p>
                    <hr className="hrCustomCard" />
                    <img src={ManClothes} alt="" className="ImgCard" />
                </div>
                <div className="secondCard">
                    <p className="TitleCard">Tops Fashion <span className="spanCard">Fall Shirts</span></p>
                    <p className="DesCard">The shirts for women are great for daily, shopping, <br />
                     going out, office, work, school, <br /> perfect for home and travel and busy days.</p>
                    <p className="DiscoverCard">Discover Now</p>
                    <hr className="hrCustomCard" />
                    <img src={WomenClothes} alt="" className="ImgCard" />
                </div>
            </div>
        </>
    );
}
