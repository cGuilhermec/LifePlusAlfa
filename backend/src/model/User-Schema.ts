import mongoose, { Schema, Document } from 'mongoose';
import Weight from './Weight-Schema';
import { IUser } from "../interfaces/IUser";

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
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
    age: {
        type: String,
        required: true
    },
    weight: [ Weight.schema ],
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true,
    },
    kcalDaily: {
        type: Number,
        required: true,
    },
    goalWeight: {
        type: Number,
        required: true
    }
},
{timestamps: true});

const User = mongoose.model<IUser>('User', userSchema);

export default User;