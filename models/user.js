import {Schema ,model,models} from 'mongoose';

const UserSchema=new Schema({
    email:{
        type:String,
        unique:[true,'Email aldredy exist!'],
        required:[true,'Email is requirede']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
       
      },
  
    image:{
        type:String,
    }
});

const User = models.user||model("User",UserSchema);
export default User;

