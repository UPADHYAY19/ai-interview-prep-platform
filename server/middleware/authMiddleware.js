const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {

    // get token from header
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // remove "Bearer "
    const actualToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    // verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // attach user to request
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;