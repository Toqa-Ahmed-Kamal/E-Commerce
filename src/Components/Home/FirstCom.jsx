import ClothesImg from "../../Img/ClothesImg.png"
import ClothesImg3 from "../../Img/ClothesImg3.png"
import ClothesImg6 from "../../Img/ClothesImg6.png"
import AddCart from '../../Img/add-cart.png'
import Page1 from '../../Img/Page1.png'

import "../Css/FirstCom.css"

export default function FirstCom(){
    return <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="firstDiv">
                            <img src={ClothesImg} className="d-block" alt="..."/>
                            <div>
                            <p className="firstTitle">WAY KAMBAS <br />
                            MINI STYLE</p>
                            <hr className="hrCustom2"/>
                            <p className="firstDes">siliteelon Men Shirts Non Iron Long Sleeve
                                <br />
                                 Plain Stretch Regular Fit Dress
                                 <br />
                                  Business Formal Shirt</p>
                            <p className="Discover">Discover</p>    
                            <hr className="hrCustom3"/>  
                                {/* <div className="firstBtns">
                                    <button type="button" class="btn1 btn-lg"> <img src={AddCart} alt="" className="imgbtn"/>Add to cart</button>
                                    <button type="button" class="btn2 btn-outline"><img src={Page1} alt="" /></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="firstDiv">
                            <img src={ClothesImg6} className="d-block" alt="..."/>
                            <div>
                            <p className="firstTitle">STAY FABULOUS <br />
                            MINI SHINE</p>
                            <hr className="hrCustom2"/>
                            <p className="firstDes"> MAGCOMSEN Men's Jackets Summer Autumn Baseball <br />
                             Coats Outdoor Casual Hiking <br />
                              Camping Jackets with Zip Pockets</p>
                            <p className="Discover">Discover</p>    
                            <hr className="hrCustom3"/>  
                                {/* <div className="firstBtns">
                                    <button type="button" class="btn1 btn-lg"> <img src={AddCart} alt="" className="imgbtn"/>Add to cart</button>
                                    <button type="button" class="btn2 btn-outline"><img src={Page1} alt="" /></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="firstDiv">
                            <img src={ClothesImg3} className="d-block " alt="..."/>
                            <div>
                            <p className="firstTitle">PLAY CANVAS <br />
                            MINI VIBES</p>
                            <hr className="hrCustom2"/>
                            <p className="firstDes">YAOHUOLE Linen Shirt Men Cotton Classic <br />
                             Lace Up Long Sleeve Casual Shirt <br />
                              Scottish Ghillie Shirt</p>
                            {/* <p className="Discover">Discover</p>    
                            <hr className="hrCustom3"/>  
                                <div className="firstBtns">
                                    <button type="button" class="btn1 btn-lg"> <img src={AddCart} alt="" className="imgbtn"/>Add to cart</button>
                                    <button type="button" class="btn2 btn-outline"><img src={Page1} alt="" /></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-container">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>

            </div>

    </>
}
