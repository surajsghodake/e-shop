const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const UserSchema = new mongoose.Schema(
  {
    name: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true },
  },
  { timestapms: true }
);

mongoose.models = {};

export default mongoose.model("User", UserSchema);
