import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function About() {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome to the "About" section of our book rental web app!
          </h1>
          <p className="mt-12 font-medium ">
            We're all about books here. Our platform offers a wide variety of
            reads, covering everything from classics to contemporary titles. You
            can easily browse through different categories to find exactly what
            you're looking for. Whether you're into fiction, non-fiction, or
            something in between, we've got you covered. Our goal is simple: to
            make it easy and enjoyable for you to discover your next favorite
            book. So, come on in, explore, and let the reading adventures begin!
            <br /> <br />
            Welcome to our innovative rental bookstore, where we bring the library 
            to you! With our online rental service, you can easily rent books from the 
            comfort of your home and have them delivered right to your doorstep. No more 
            hassle of visiting multiple libraries or waiting in long queues. Simply browse 
            through our extensive collection, select the books you want, and let us take
             care of the rest. Whether you're in the mood for a gripping mystery, 
             a heartwarming romance, or an insightful memoir, our rental bookstore 
             has something for every reader. Enjoy the convenience of online renting
              and embark on your next reading adventure with ease!
            <br /> <br />
            Here, you can explore a wide range of categories like mystery,
            children's literature, fantasy, and more. Rent your favorite books
            hassle-free and embark on an enriching journey of learning and
            discovery. With our diverse selection, there's something for
            everyone to enjoy. Dive into captivating stories, expand your
            knowledge, and immerse yourself in the world of literature. Happy
            reading!
          </p>
          <Link to = "/signup">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Get Started
          </button>
          </Link>
          <br />
          <Link to="/course">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Explore Books
            </button>
            
          </Link>
          <br /><br />
          
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
