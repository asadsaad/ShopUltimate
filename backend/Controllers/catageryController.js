const Catagery = require("../models/catageryModel");

exports.addcatagery = async (req, res) => {
  try {
    if (!req.body.catagery) {
      return res
        .status(400)
        .json({ success: false, message: "Catagery is required" });
    }
    if (!req.body.subcatagery) {
      return res
        .status(400)
        .json({ success: false, message: "Subcatagery is required" });
    }
    const catageryy = await Catagery.find({
      catagery: req.body.catagery,
    });
    console.log(catageryy);
    if (catageryy.length > 0) {
      const a = catageryy[0].subcatagery;
      for (let index = 0; index < a.length; index++) {
        const element = catageryy[0].subcatagery[index];
        if (req.body.subcatagery == element) {
          return res.status(400).json({
            success: false,
            message: "This Sub Catagery is Already in list",
          });
        }
      }
      catageryy[0].subcatagery.push(req.body.subcatagery);
      console.log(catageryy);
      const cts = await catageryy[0].save();
      return res.status(400).json({
        success: true,
        message: "This Sub Catagery is Added",
        catagery: cts,
      });
    }
    const c_catagery = new Catagery({
      catagery: req.body.catagery,
      subcatagery: req.body.subcatagery,
    });
    const cc_catagery = await c_catagery.save();
    return res.status(200).json({
      success: true,
      data: cc_catagery,
      message: "New Catagery Added",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getallcatageries = async (req, res) => {
  try {
    const catagery = await Catagery.find();
    return res.status(200).json({ success: true, catagery: catagery });
  } catch (error) {
    console.log(error.message);
  }
};
