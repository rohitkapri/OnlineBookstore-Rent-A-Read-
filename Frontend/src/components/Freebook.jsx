import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [selectedBookId , setSelectedBookId] = useState("");
  const [book, setBook] = useState([]);
  const handleSelectedBook = (id)=>{
    console.log(id);
  }
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.price === 0);
        // console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Rent Books For Free</h1>
          <p>
          Great news for book lovers! You can now enjoy your favorite reads without breaking the bank. Introducing our new free book rental service, where you can borrow books at absolutely no cost. Dive into captivating stories, explore new worlds, and broaden your horizons without spending a dime.
          <br />
          With a diverse collection spanning genres from classics to contemporary fiction, non-fiction to self-help, there's something for everyone. Say goodbye to expensive book purchases and hello to limitless literary adventures, all at your fingertips, all for free. Happy reading!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} handleClick={handleSelectedBook}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
