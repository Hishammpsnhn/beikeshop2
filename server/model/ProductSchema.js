import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, // Reference to Category
  rating: [
    {
      commands: { type: String },
      rating: { type: Number },
      userId: { type: Schema.Types.ObjectId },
    },
  ],
  images: [{ type: String, required: true }],
  fabric: { type: String, required: true },
  discount: { type: Number },
  sizes: [
    {
      price: { type: Number },
      size: { type: String },
      stock: { type: Number },
    },
  ],
  isDeleted: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Products = mongoose.model('Products', ProductsSchema);

export default Products;
