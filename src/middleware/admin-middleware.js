import { ResponseError } from "../err/response-error.js";
import jwt from "jsonwebtoken";
import { prismaClient } from "../application/database.js";

export const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ResponseError(401, "Unauthorized!");
  } else {
    const tokenJwt = token.split(" ")[1];
    jwt.verify(tokenJwt, process.env.ACCESS_SECRET_KEY, async (err, user) => {
      if (err) {
        return res.status(403).json({ errors: err.message });
      }

      const invalidToken = await prismaClient.invalidToken.findFirst({
        where: {
          token_jwt: tokenJwt,
        },
      });

      if (invalidToken) {
        res.status(403).json({ errors: "Token is invalid!" });
      }

      if (!user.isAdmin) {
        res.status(403).json({ errors: "Forbidden!" });
      }

      req.user = user;
      next();
    });
  }
};
