

//404 error
const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`)
	res.status(404).send(`Not Found - ${req.originalUrl}`)
	next(error)
}

//Other error handling
const errorHandler = (err, req, res, next) => {
	console.log(`Error: ${err}`.yellow.bold)
	const statusCode = res.statusCode === 200 ? 500 : res.StatusCode
	res.status(statusCode)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack
	})
}


export { notFound, errorHandler }