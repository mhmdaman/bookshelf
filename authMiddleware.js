const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // If no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user data to request
    req.user = decoded;

    next(); // move to next middleware
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

