import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to Online Book Rental Service{" "}
              <span className="text-pink-500">Rent-A-Read</span>
            </h1>
              <p className="text-sm md:text-xl">
              Welcome to our innovative rental bookstore, where we bring the library to you! With our online rental service, you can easily rent books from the comfort of your home and have them delivered right to your doorstep. No more hassle of visiting multiple libraries or waiting in long queues. Simply browse through our extensive collection, select the books you want, and let us take care of the rest. 
            </p>
            
          </div>
          <a href="/signup"><button className="btn mt-6 btn-secondary" >Get Started</button></a>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
      <br /><br />
    </>
  );
}

export default Banner;
