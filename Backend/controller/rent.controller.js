import Rent from "../model/rent.model.js";

export const rentBook = async (req, res, next) => {
    const { bookId, personname , rentdate , returndate} = req.body;
    // const hashedPassword = bcryptjs.hashSync(password, 10);
    const newRent = new Rent({ bookId, personname , rentdate , returndate });
    try {
      await newRent.save();
      res.status(201).json('Book Rented successfully!');
    } catch (error) {
      next(error);
    }
  };