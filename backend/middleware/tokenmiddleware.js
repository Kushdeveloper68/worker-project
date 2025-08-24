const jwt = require("jsonwebtoken")
const key = process.env.SECRETJSONKEY || "kush123";

async function tokenmiddleware(req , res , next) {
    console.log(req.cookies.ai)

    const token = req.headers.authorization?.split(" ")[1];
    if (!token)  return res.json({message:"login required"});

    try { 
        const decoded = jwt.verify(token , key);
        req.user = decoded;
        next()
    } catch (error) {
        console.log("middleware error", error)
    }
}
module.exports = {
    tokenmiddleware
}