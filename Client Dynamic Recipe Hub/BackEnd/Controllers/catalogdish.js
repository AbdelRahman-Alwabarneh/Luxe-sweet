const Record = require("../models/DishModel");

exports.getRecords = async (req, res) => {
  try {
    const { search } = req.query; // Get the search parameter from the query string
    const query = { isDeleted: false, show: true }; // Base query for records

    // If search is provided, add it to the query using a regular expression for partial matches
    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Search by name (case insensitive)
    }

    const records = await Record.find(query); // Query the database with the modified query
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getComingsoon = async (req, res) => {
  try {
    const records = await Record.find({ isDeleted: false, show: false });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
