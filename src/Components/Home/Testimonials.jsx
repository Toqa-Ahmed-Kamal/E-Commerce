import TestimonialsImg from "../../Img/TestimonialsImg.jpg"
import TestimonialsImg2 from "../../Img/TestimonialsImg2.jpg"
import TestimonialsImg3 from "../../Img/TestimonialsImg3.jpg"
import TestimonialsImg4 from "../../Img/TestimonialsImg4.jpg"
import Rectangle21 from "../../Img/Rectangle21.png"
import Right from "../../Img/Right.png"
import Left from "../../Img/Left.png"

import "../Css/Testimonials.css"

import React, { useState } from "react";

const testimonials = [
    {
      background: Rectangle21,
      profile: TestimonialsImg,
    },
    {

      background:Rectangle21 ,
      profile: TestimonialsImg2,
    },
    {
      background: Rectangle21,
      profile: TestimonialsImg3,
    },
    {
        background: Rectangle21,
        profile: TestimonialsImg4,
    },
  ];
  
export default function Testimonials(){

    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

    return <>
   <div className="carousel-container1">
      <button className="prev-btn" onClick={prevSlide}>
       <img src={Left} alt="btn" loading="lazy"/>
      </button>

      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial ${
              index === currentIndex ? "active" : "inactive"
            }`}
            key={index}
          >
            <div className="left">
              <img
                loading="lazy"
                className="background-img"
                src={testimonial.background}
                alt="Background"
              />
              <img
                loading="lazy"
                className="profile-img"
                src={testimonial.profile}
                alt={`Profile of ${testimonial.person}`}
              />
            </div>
            <div className="right">
              <p className="testimonialDes">Testimonial</p>
              <hr className="hrCustomTestimonial"/>
              <p className="TestimonialText">I absolutely love my new outfit from @matoa_id! The design is inspired by <br />
              Western heritage, and the materials used give it a unique and stylish touch. <br /> 
              Each piece tells a story, making it perfect for any occasion <br /></p>
              <p className="TestimonialPerson">Gita Savitri <br />
                <span className="TestimonialSpan">Content Creator/Influencer</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="next-btn" onClick={nextSlide} id="TestBtn">
        <img src={Right} alt="btn" loading="lazy"/>
      </button>
    </div>
    </>
}
