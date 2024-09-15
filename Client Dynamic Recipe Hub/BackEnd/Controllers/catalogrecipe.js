const resipe = require("../Models/recipemodel");

exports.getrecipe = async (req, res) => {
  try {
    // Extract search term, page, and limit from query parameters
    const searchTerm = req.query.search || "";
    const page = parseInt(req.query.page, 10) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit, 10) || 10; // Default to 10 items per page if not provided

    // Build the search query
    const searchQuery = {
      isDeleted: false,
      show: true,
      title: { $regex: searchTerm, $options: 'i' } // Case-insensitive search for title
    };

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;

    // Find records based on the search query with pagination
    const records = await resipe.find(searchQuery).skip(skip).limit(limit);

    // Get the total count of records for pagination info
    const totalRecords = await resipe.countDocuments(searchQuery);

    res.status(200).json({
      totalRecords,
      currentPage: page,
      totalPages: Math.ceil(totalRecords / limit),
      records
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


