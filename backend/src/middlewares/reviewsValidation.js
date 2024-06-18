export const validateReview = (req, res, next) => {
  // const { rating, comment } = req.body;
  // if (!rating || !comment) {
  //   return res.status(400).json({ message: "Rating and comment are required" });
  // }
  // if (rating < 1 || rating > 5) {
  //   return res.status(400).json({ message: "Rating must be between 1 and 5" });
  // }
  next();
};
