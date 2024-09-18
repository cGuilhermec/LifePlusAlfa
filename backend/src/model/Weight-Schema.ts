import mongoose, {Schema} from "mongoose";
import { IWeight } from "../interfaces/IWeight";

const weightSchema: Schema = new Schema({
    weight: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
},
    {timestamps: true});

const Weight = mongoose.model<IWeight>('Weight', weightSchema);

export default Weight;