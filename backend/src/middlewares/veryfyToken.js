import jwt from "jsonwebtoken";

// Verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log("SECRET_KEY:", process.env.SECRET_KEY);
      console.log("Decoded token:", decoded);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "invalid token" });
    }
  } else {
    res.status(401).json({ message: "no token provided" });
  }
};

// Verify token and authorize user
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next(); //  nex MW
    } else {
      res.status(403).json({ message: "unauthorized access" });
    }
  });
};

//** ADMIN */

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("ADMINNNN:", req.user.isAdmin);
    // return next();
    if (req.user.isAdmin) {
      return next();
    } else {
      return res.status(403).json({ message: "not allowed, only admin" });
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
