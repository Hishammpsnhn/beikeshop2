// import Category from "../model/categorySchema.js";

// export const createCategory = async (req, res) => {
//   try {
//    const newCategory = new Category({
//      name: req.body.name,
//      description: req.body.description,
//      subCategory: req.body.subCategory
//    })
//    const saved = await createCategory.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
