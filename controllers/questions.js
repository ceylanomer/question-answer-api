const getAllQuestions = (req, res, next) => {
  res.status(200).json({
    success: false,
  });
};

module.exports = {
    getAllQuestions
}
