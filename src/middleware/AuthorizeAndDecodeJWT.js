var jwt = require('jwt-simple');
var config = require('../../config');

// Decode the JWT, Validate it, Set the body onto the request for use
module.exports = function(req, res, next) {
    try {
        console.log('JWT_TOKEN_SECRET:'+config.JWT_TOKEN_SECRET);
        req.jwtPayload = jwt.decode(req.get('Authorization'), config.JWT_TOKEN_SECRET);
    } catch(err) {
        console.log(err.message);
        res.status(401).send(err.message).end();
    }
    next();
}
