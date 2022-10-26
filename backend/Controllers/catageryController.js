const Catagery = require("../models/catageryModel");

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      type: cate.type,
      children: createCategories(categories, cate._id),
    });
  }

  return categoryList;
}

exports.addcatagery = async (req, res) => {
  try {
    if (!req.body.catagery) {
      return res
        .status(400)
        .json({ success: false, message: "Catagery Name is required" });
    }
    const isunique = Catagery.findOne({ catagery_name: req.body.catagery });

    if (!req.body.subcatagery) {
      return res
        .status(400)
        .json({ success: false, message: "Subcatagery is required" });
    }
    if (isunique) {
      return res
        .status(400)
        .json({ success: false, message: "Catagery Already Exists" });
    }
    const categoryObj = {
      catagery_name: req.body.catagery_name,
      created_byy: req.user,
    };

    if (req.body.categoryImage) {
      categoryObj.categoryImage = req.body.categoryImage;
    }

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }

    const cat = await new Category(categoryObj);
    const catageries = await cat.save();
    return res.status(200).json({
      success: true,
      catagery: catageries,
      message: "Catagery Added Successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getallcatageries = async (req, res) => {
  try {
    const catageries = await Catagery.find();
    if (catageries) {
      const categoryList = createCategories(catageries);
      res.status(200).json({ categoryList, success: true });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.getallcatagerieslist = async (req, res) => {
  try {
    const catageries = await Catagery.find();
    if (catageries) {
      res.status(200).json({ categoryList: catageries, success: true });
    }
  } catch (error) {
    console.log(error.message);
  }
};
