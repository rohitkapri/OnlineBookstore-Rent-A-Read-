import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
import axios from 'axios';


const Rentmodal = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [name , setName] = useState("");
  const [rentDate ,setRentDate] = useState("");
  const [returnDate , setReturnDate] = useState("");
  const [address, setAddress] = useState("");
  

  const callRent = async (e) => {
    e.preventDefault();

    let payload = {
      personname: name,
      rentdate: rentDate,
      returndate: returnDate,
      address: address
    };
    
    try {
      const response = await axios.post('http://localhost:4001/rent', payload);

      if(response)
      console.log(response.data);
      
      setName("");
      setRentDate("");
      setReturnDate("");
      setAddress("");
    } catch (error) {
      console.error('Error:', error);
      
    }
  }

  // console.log(name , rentDate , returnDate , address);

  
  return (
    <>
      <Modal
  open={true}
  onClose={() => {setOpenModal(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <form >
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Name</span> 
              {/* person name rentdate and returndate */}
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                name= "name"
                onChange={(e)=> {setName(e.target.value);}}
              />
              <br />
              <span>Rent Date</span> 
              {/* person name rentdate and returndate */}
              <br />
              <input
                type="date"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                name = "rentDate"
                onChange={(e)=> {setRentDate(e.target.value);}}
              />
              <br />
              <span>Return Date</span> 
              {/* person name rentdate and returndate */}
              <br />
              <input
                type="date"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                name = "returnDate"
                onChange={(e)=> {setReturnDate(e.target.value);}}
              />
              <br />
              <span>Address</span> 
              {/* person name rentdate and returndate */}
              <br />
              <textarea name="address" className="w-80 px-3 py-1 border rounded-md outline-none" onChange={(e)=> {setAddress(e.target.value);}}></textarea>
              <br />

              <button className='bg-pink-500 text-white rounded-md px-3 py-1 mr-20 hover:bg-pink-700 duration-200' onClick={(e) => {callRent(e)}}>Place Order</button>
              <Link to="/"><button className='bg-pink-500 text-white rounded-md px-3 py-1 ml-12 hover:bg-pink-700 duration-200'>Close</button></Link>
            </div>
    </form>
  </Box>
</Modal>
    </>
  )
}

export default Rentmodal
