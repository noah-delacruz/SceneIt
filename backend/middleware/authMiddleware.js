import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from token without the password
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            return res
                .status(400)
                .json({ message: "Not authorized, token failed" });
        }
    } else {
        return res.status(400).json({ message: "Not authorized, no token" });
    }
};

export default protect;
