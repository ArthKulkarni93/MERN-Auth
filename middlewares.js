const zod = require('zod');
const jwt = require('jsonwebtoken');
const secret = 'secret';

const login_Schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8)
})
const signup_Schema = zod.object({
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string().min(8)
})

const login_Midleware = (req,res,next) => {

    const parsed = login_Schema.safeParse(req.body)
    if(parsed.success) next();
    else {
        return res.json({
            msg:"e in loginmiddleware",
            success:"false"
        })
    }
}
const signup_Midleware = async (req,res,next) => {

        const parsed = await signup_Schema.safeParse(req.body)
        if(parsed.success) next();
        else {
            return res.json({
                msg:"e in signupmiddleware",
                success:"false"
            })
        }
}

const gen_jwt = (email , _id) => {
    return token = jwt.sign({email , _id},secret);
}
const dec_jwt = (token) => {
    return jwt.decode(token);
}
const ver_jwt = (req,res,next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ 
        error: 'No token provided',
        success:"false" });

    try {
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ 
            error: 'Invalid token' ,
            success:"false"
        });
    }
}
module.exports = {
    login_Midleware,
    signup_Midleware,
    gen_jwt,
    dec_jwt,
    ver_jwt
}