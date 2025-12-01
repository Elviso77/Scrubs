import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/testimonials/user1.jpg";
import Img2 from "../../assets/testimonials/user2.jpg";
import Img3 from "../../assets/testimonials/user3.jpg";
import Img4 from "../../assets/testimonials/user4.jpg";
import Img5 from "../../assets/testimonials/user5.jpg";
import Img6 from "../../assets/testimonials/user6.jpg";
import Img7 from "../../assets/testimonials/user7.jpg";
import Img8 from "../../assets/testimonials/user8.jpg";
import Img9 from "../../assets/testimonials/user9.jpg";
import { text } from "framer-motion/client";

const TestimonialData = [
   { id: 1, img: Img1, name: "Sarah M., RN", text: "Honestly the softest scrubs I've ever owned. 12-hour shifts feel lighter. Worth every penny. RN, Emergency Department", aosDelay: "0" },
   { id: 2, img: Img2, name: "Satya Nadella., Family Medicine", text: "Finally, scrubs that keep me cool and dry. The breathable fabric is a lifesaver in a busy unit.", aosDelay: "0" },
   { id: 1, img: Img3, name: "Ben C., PT, Orthopedics", text:"Maximum flexibility, zero restriction! They move with me, even when I'm running all day.", aosDelay: "0" },
   { id: 3, img: Img4, name: "Lisa P., Surgical Tech", text:"Washed a hundred times and the color is still vibrant! No fading, no pilling. True quality.", aosDelay: "0" },
   { id: 4, img: Img5, name: "Dr. Emily K., Resident", text:"Pocket perfection! Everything has a place—phone, pens, supplies. Keeps me organized and efficient.", aosDelay: "0" },
   { id: 5, img: Img6, name: "Chloe D., RN, Pediatrics", text:"The perfect modern fit. Flattering without being tight. I actually feel good wearing my uniform!", aosDelay: "0" },
   { id: 6, img: Img7, name: "Tina H., RN, Home Health", text:"As a tall nurse, finding the right fit is a nightmare. The sizing was spot-on and the length is great.", aosDelay: "0" },
   { id: 7, img: Img8, name: "Eve Scott., Surgery", text:"Blazing fast shipping and super helpful customer service. I was ready for my new job in days", aosDelay: "0" },
   { id: 8, img: Img9, name: "Kimberley L., Lab Technician", text:"Spills happen, but these scrubs release stains easily. I look clean and professional every time.", aosDelay: "0" },
  // {
  //   id: 1,
  //   name: "Victor",
  //   text: "Truly Butter-Soft Fabric! I was skeptical about the 'butter-soft' claims, but these are truly the most comfortable scrubs I've ever worn. After a 12-hour shift, they still feel light and breathable. No chafing, no stiffness. I'm ordering two more sets immediately",
  //   img: "Img1",
  //   aosDelay: "200"
  // },
  // {
  //   id: 2,
  //   name: "Satya Nadella",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "Img2",
  // },
  // {
  //   id: 3,
  //   name: "Virat Kohli",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img3",
  // },
  // {
  //   id: 5,
  //   name: "Sachin Tendulkar",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img4",
  // },
  // {
  //   id: 5,
  //   name: "Sachin Tendulkar",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img5",
  // },
  // {
  //   id: 5,
  //   name: "Sachin Tendulkar",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img6",
  // },
  // {
  //   id: 5,
  //   name: "Sachin Tendulkar",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img7",
  // },
  // {
  //   id: 5,
  //   name: "Sachin Tendulkar",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img8",
  // },
  // {
  //   id: 5,
  //   name: "Sachin Tendulkar",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "img9",
  // },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10" id="testimonials">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers says
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-1xl text-gray-500">
            The demanding world of healthcare requires uniforms that can keep pace. We don't just sell scrubs, we supply essential gear. Read genuine feedback from your colleagues on how HisandHers Scrubs stand up to 12-hour shifts, countless washes, and constant movement.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-1xl text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
