const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: Number, required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Company_List = mongoose.model("list", listSchema);

module.exports = Company_List;
