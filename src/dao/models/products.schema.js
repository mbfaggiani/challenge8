import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productModel = new mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      thumbnail: { type: Array, required: true },
      code: { type: String, required: true, unique: true },
      stock: { type: Number, required: true },
      status: { type: Boolean, required: true },
      category: { type: String, required: true },
    },
    { versionKey: false }
  );
  
  productModel.plugin(mongoosePaginate);

  export default productModel