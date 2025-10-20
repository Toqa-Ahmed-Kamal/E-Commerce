import Image25 from "../../Img/Image25.png"
import Image26 from "../../Img/Image26.png"
import Image27 from "../../Img/Image27.png"
import Image28 from "../../Img/Image28.png"
import Image29 from "../../Img/Image29.png"
import Image32 from "../../Img/Image32.png"
import Image33 from "../../Img/Image33.png"
import Image34 from "../../Img/Image34.png"
import Image35 from "../../Img/Image35.png"
import Image36 from "../../Img/Image36.png"
import Image30 from "../../Img/Image30.png"

import Facebook from "../../Img/Facebook.png"
import Instagram from "../../Img/Instagram.png"
import Twitter from "../../Img/Twitter.png"
import Youtube from "../../Img/Youtube.png"

import "../Css/Footer.css"

export default function Footer(){

    return <>
        <div className="sponsorCompanys">
            <div className="sposer1">
                <img src={Image25} alt="sponsor companys"/>
                <img src={Image26} alt="sponsor companys" />
                <img src={Image27} alt="sponsor companys" />
                <img src={Image28} alt="sponsor companys" />
                <img src={Image29} alt="sponsor companys" />
            </div>
            <div className="sposer2">
                <img src={Image32} alt="sponsor companys" />
                <img src={Image33} alt="sponsor companys" />
                <img src={Image34} alt="sponsor companys" />
                <img src={Image35} alt="sponsor companys" />
                <img src={Image36} alt="sponsor companys"/>
            </div>
        </div>
        <div className="footer">
                <div className="information">
                    <img src={Image30} alt="Logo" className="logoFooter"/>
                    <p className="title">Address</p>
                    <p className="des">Store & Office <br />
                        Jl. Setrasari Kulon III, No. 10-12,<br />
                        Sukarasa, Sukasari, Bandung,<br />
                        Jawa Barat, Indonesia 40152</p>
                    <p className="title">Office Hour</p>
                    <p className="des">Monday - Sunday <br/>
                    10.00 - 18.00</p>
                </div>
                <div className="getInTouch">
                    <p className="title2">Get in touch</p>
                    <hr className="hrCustom"/>
                    <p>Phone <span className="span1">022-20277564</span> </p>
                    <p>Service <br /> Center <span className="span1">0811-233-8899</span> </p>
                    <p>Customer <br /> Service <span className="span1">0811-235-9988</span> </p>
                    <div className="socialMedia">
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Youtube} alt="" />
                    </div>

                </div>
                <div className="links"> 
                    < p className="title2">Useful Link</p>
                    <hr className="hrCustom"/>
                    <p className="des2">Warranty & Complaints <br />
                        Order & Shipping <br />
                        Tracking Order <br />
                        About Us <br />
                        Repair <br />
                        Terms <br />
                        FAQ
                    </p>
                </div>
                <div className="campaign">
                    <p className="title2">Campaign</p>
                    <hr className="hrCustom"/>
                    <p className="des2"> Mengenal Arti Cukup <br />
                        Tell Your Difference <br />
                        Waykambas <br />
                        Rebrand <br />
                        Gallery <br />
                        Singo <br />
                        Rakai 
                    </p>
                </div>
        </div>        
    </>
}