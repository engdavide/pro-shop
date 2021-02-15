//404 error
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const errMessage = String(err).split('\n', 2)[0]
  console.log(`${statusCode} -- ${errMessage}`.yellow.bold)
  res.status(statusCode).json({
    message: errMessage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
