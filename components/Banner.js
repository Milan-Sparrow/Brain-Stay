import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HiChevronDoubleDown } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh]">
      <div className="absolute w-full h-20 bg-gradient-to-t from-black to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {/* <div className="flex bg-banner3 bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[90vh]">
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold flex flex-col justify-center items-center m-auto w-[80vw] md:[60vw] lg:[50vw]">
            <p className="w-[70vw] md:w-[80vw] lg:w-[85vw]">
              Serving Best Restaurant, Catering & Banquet Services In New Jersey
            </p>
            <HiChevronDoubleDown className="h-16" />
          </div>
        </div> */}
        {/* <div className="flex bg-banner1 bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[90vh]">
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold flex justify-center items-center m-auto w-[80vw] md:[60vw] lg:[50vw]">
            <p className="w-[70vw] md:w-[80vw] lg:w-[85vw]">
              Serving Best Restaurant, Catering & Banquet Services In New Jersey
            </p>
          </div>
        </div>
        <div className="flex bg-banner2 bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[90vh]">
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold flex justify-center items-center m-auto w-[80vw] md:[60vw] lg:[50vw]">
            <p className="w-[70vw] md:w-[80vw] lg:w-[85vw]">
              Serving Best Restaurant, Catering & Banquet Services In New Jersey
            </p>
          </div>
        </div> */}

        <div className="flex flex-col items-center justify-center bg-banner3 bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
          <div className="absolute h-[65%] sm:h-[60%] md:h-[55%] lg:h-[60%] bottom-5 text-3xl md:text-4xl lg:text-6xl font-bold flex flex-col justify-center items-center m-auto w-[80vw] md:[60vw] lg:[50vw]">
            <p className="w-[80vw] md:w-[80vw] lg:w-[85vw] flex-grow text-3xl md:text-5xl lg:text-6xl">
              Serving Best Restaurant, Catering & Banquet Services In New Jersey
            </p>
            <div className="animate-bounce">
              <HiChevronDoubleDown className="h-16" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-banner2 bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
          <div className="absolute h-[65%] sm:h-[60%] md:h-[55%] lg:h-[60%] bottom-5 text-3xl md:text-4xl lg:text-6xl font-bold flex flex-col justify-center items-center m-auto w-[80vw] md:[60vw] lg:[50vw]">
            <p className="w-[80vw] md:w-[80vw] lg:w-[85vw] flex-grow text-3xl md:text-5xl lg:text-6xl">
              Serving Best Restaurant, Catering & Banquet Services In New Jersey
            </p>
            <div className="animate-bounce cursor-pointer">
              <HiChevronDoubleDown className="h-16" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-banner1 bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
          <div className="absolute h-[65%] sm:h-[60%] md:h-[55%] lg:h-[60%] bottom-5 text-3xl md:text-4xl lg:text-6xl font-bold flex flex-col justify-center items-center m-auto w-[80vw] md:[60vw] lg:[50vw]">
            <p className="w-[80vw] md:w-[80vw] lg:w-[85vw] flex-grow text-3xl md:text-5xl lg:text-6xl">
              Serving Best Restaurant, Catering & Banquet Services In New Jersey
            </p>
            <div className="animate-bounce">
              <HiChevronDoubleDown className="h-16" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

{
  /* <div className="w-full">
          <Image
            width={4060}
            height={2117}
            layout="responsive"
            src="https://lh3.googleusercontent.com/QDeIzLIG7iEkYWJSYSAeANYvkVMA5IL3AIaF92amuQQ4UNDSMUdbx00UeIIJ-5CIOkBtuwlZhMv39vt34ZuXab2_5jw3lBmOzWw4YbAlZ0gOrrATreTwfBACmfF72h31VeCF9qMoDVKQEXx2WmOv4SkJbFI4OidcGsZXkEZGW_YhDsfGhKW3vkgub4D5kIP05YZTKvdVovalQ8tYFJKhL9W3QYKBflrefVlVA0RjUPrgNNM5CHIwu9AfbMqaoEEecPRjuMJTsd_MvtNROzOR4YedF6SvqMYo8rio0kVdAwj--msyIiS5C31zBdLjQHbzv5zPlDxM3-dpi-jfjm0Hbiq_SH6gNRTOg_R45cLbdlHxAxZHJO9Ih5uZ-tYqpkROLj1DUdsrapVXUUcJmHvBbKVddlnaX6rHdfZsJl7lsPGS0kcM095t5dnbdDg34NbVvhZDbpioIPMqhKi-Lyub5NKPh5YB016tYjnYqTxQExqXwQ5qSfzEzltj0skz-LpShQI30RgKFmu1s_ocbCUj1YRvQGO6kUnmWhpoyujPndaWbkrAorSO5o5wzFbpGnb7jSX1O4lVDVldS12tfb7VXY_WaKgvR5SMp39LGS4wlk7ofErto72m772NPZuQ4V1q3adGsWR9y8FIl7Tj6vb8IhABVxO_31jwW22Jq1qs46CTF_VfnhQqchlJCdjjXrv_m491gXnjwapnU6Nga72xXQ=w1708-h894-no?authuser=3"
          />
        </div>

        <div className="w-full">
          <Image
            width={4060}
            height={2117}
            layout="responsive"
            src="https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className="w-full">
          <Image
            width={4060}
            height={2117}
            layout="responsive"
            src="https://lh3.googleusercontent.com/OJ0zM1Sk7G9C_2aPEuZhE5By_fz53Xe5p9ZEF0O5uHsoVY7xNDztK1un2dGs6t79C2UZItna7Q4jEmckQ5YESz5fwgJi5tmD4gmD4cn0v9l2wrFe_NYrX1agptYe7MLAI2DtuMx-8ZNp-WIX8dY_MLJiT3kqaY_pgjcD_tC40tSHOq3cT8agTyxas-MkUamPDB6OwR1X8LzZtU08f4IBuangmI2YdtDRzokG-HaTf-gUmwp8rvDcllBJPg7QGvuEh1fEqhnE-77WyPq7jOPb2H5kOD2ivob8F7G8IpG_iR0MXK4CVsInaOgA-DMo1rrzx63wY6Ww15xmdFlLIvcQFvxOQpT6ZbcVqw5qyhtrN-tOOyUK0Nr42YloBhTMCaRcejEqKNKYuM1SxD7xpQiXQTVgAPMinHjUrYBHD5kIpJUm39Z0h224U1ULiyamZCUO-QCM-gCCPCCBRilLIyviJ46w861y2FfI94k_z7qzQ-6fi685WKI6z5SmERLHPfEPVJu49KLZgNHzCM1WHNR5Vx6xEZJTouahEc2cZX1KTmCWZJ7LrZiJCL-FpJPnjiKBCMW6MoZDDWR-N5cKwu_QxP1QUearM4m5kUk_0NBHWoqE6VFkstEg5wkI9_draEH_9ZFp8cR1qPF3mTXjy1CUq28bw4-W1-OOCXsjKdyzs0_c6VU4x1xJ4Oey5APqpz5rboZAFtnFIqqaWyZBnD0Hl5Q=w1592-h833-no?authuser=3"
          />
        </div> */
  // h-[75%] mt-[25%] md:h-[50vh] md:mt-[40%] lg:h-[40vh] lg:mt-[20%]
}
