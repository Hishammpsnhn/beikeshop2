import Category from "../model/categorySchema.js";

export const createCategory = async (req, res) => {
  try {
    const newCategory = new Category({
      category: req.body.name,
      description: req.body.description,
      subCategory: req.body.subCategory,
    });
    const saved = await newCategory.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error saving category:", error.message); // Log the error
    res.status(400).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find({ isDeleted: false });
    res.status(200).json(categories );
  } catch (error) {
    console.error("Error getting category:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};



export const softDeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id, 
      { isDeleted: true }, 
      { new: true }  
    );
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category soft deleted', category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};