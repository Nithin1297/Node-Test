// middleware/auth.middleware.js
import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; // Attach user to request
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJWT;