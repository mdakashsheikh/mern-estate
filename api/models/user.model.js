import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://amikomcenter.com/wp-content/uploads/2023/11/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.jpg'
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);
export default User;