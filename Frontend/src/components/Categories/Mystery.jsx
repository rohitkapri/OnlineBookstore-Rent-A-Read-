import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"
import Footer from "../Footer";
function Mystery() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const MysteryBooks = book.filter((item) => item.category === "Mystery")

  return (
    <>
    <Navbar/>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Mystery Books
          </h1>
          <p className="mt-12">
          Welcome to our book rental hub, where the world of literature is at your fingertips, 
          both paid and free! Dive into a treasure trove of stories spanning genres and eras, 
          with options to suit every budget and preference. Explore our curated selection of paid 
          rentals for those seeking the latest releases, literary classics, and specialized knowledge. 
          For those looking to stretch their reading budget, discover our extensive collection of free rentals,
           offering access to timeless tales and insightful literature without any cost.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {MysteryBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Mystery;
