import { Document, Schema, ObjectId, model } from "mongoose";

interface Payment {
    orderId: string,
    total: number,
    isPaid: boolean
}

const paymentSchema = new Schema<Payment>({
    orderId: String,
    total: Number,
    isPaid: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default model<Payment>("Payment", paymentSchema);
