module.exports = (request, response, next) => {
  try {
    if (Math.random() < 0.1)
      throw new Error('How unfortunate! The API Request Failed')
    next();
  } catch (e) {
    return response
      .status(400)
      .json({
        msg: 'How unfortunate! The API Request Failed'
      })
  }
}
