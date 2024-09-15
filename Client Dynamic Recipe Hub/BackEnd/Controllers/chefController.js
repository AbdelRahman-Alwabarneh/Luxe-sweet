const chef = require("../Models/chefModels");

exports.getChef = async (req, res) => {
  try {
    const records = await chef.find({ isApproved: true });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
