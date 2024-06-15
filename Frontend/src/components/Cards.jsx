import React from "react";
import { useNavigate } from "react-router-dom";


function Cards({ item , handleClick }){

  const navigate = useNavigate()

  
  return (
    <>
      <div className="mt-4 my-3 p-3 h-150 ">
        <div className="card w-92 h-100 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="w-full h-60">
            <img src={item.image} onError={(e) => { e.target.src = 'https://img.freepik.com/free-photo/3d-book-with-blank-blue-cover_107791-17004.jpg?t=st=1715597108~exp=1715600708~hmac=2f9533a1d0757c786727e5ea057ba1af5117e5d9fcdf1d453453668ad3de541d&w=900' }} alt="Shoes" 
            className="w-full h-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
             <button onClick={()=> {handleClick(item._id);
              navigate("/RentModal")
             }}> Rent Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
