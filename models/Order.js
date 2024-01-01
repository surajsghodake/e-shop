const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const OrderSchema = new mongoose.Schema(
  {
    useId: { type: string, required: true },
    products: [
      {
        productId: { type: string },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: { type: string, required: true },
    amount: { type: Number, required: true },
    status: { type: string, default: "Pending", required: true },
  },
  { timestapms: true }
);

mongoose.models = {};

export default mongoose.model("Order", OrderSchema);
