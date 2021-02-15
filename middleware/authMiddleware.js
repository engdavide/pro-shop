import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ', 2)[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      res.status(401)
      const errorMessage = new Error('Not authorized--token failed')
      next(errorMessage)
    }
  }

  if (!token) {
    res.status(401)
    const error = new Error('Not authorized--no token')
    next(error)
  }
}

export { protect }
