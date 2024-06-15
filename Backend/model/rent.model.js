import mongoose from "mongoose";
import { Types } from "mongoose";
const rentSchema = mongoose.Schema({
    bookId:{type: mongoose.Schema.Types.ObjectId, ref: 'books'},
    personname: String,
    rentdate: String,
    returndate: String,
    address: String
});
const Rent = mongoose.model("Rent", rentSchema);

export default Rent;