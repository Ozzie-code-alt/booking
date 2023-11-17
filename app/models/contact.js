// this is the model for conact or the schemas 
import Schema from "mongoose"

const contactSchema = new Schema({
fullname:{ // these are fields
    type: String,
    required: [true, "Name is Required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
},

email:{

}
})